import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Simple in-memory rate limiting
interface RateLimitEntry {
  count: number;
  timestamp: number;
}

const rateLimitStore = new Map<string, RateLimitEntry>();
const RATE_LIMIT_WINDOW = 3600000; // 1 hour in milliseconds
const MAX_REQUESTS_PER_WINDOW = 5; // Maximum 5 emails per hour per IP

// Rate limiting function
function isRateLimited(identifier: string): boolean {
  const now = Date.now();
  const entry = rateLimitStore.get(identifier);
  
  if (!entry) {
    // First request from this identifier
    rateLimitStore.set(identifier, { count: 1, timestamp: now });
    return false;
  }
  
  if (now - entry.timestamp > RATE_LIMIT_WINDOW) {
    // Window has passed, reset counter
    rateLimitStore.set(identifier, { count: 1, timestamp: now });
    return false;
  }
  
  // Increment counter
  entry.count += 1;
  rateLimitStore.set(identifier, entry);
  
  // Check if over limit
  return entry.count > MAX_REQUESTS_PER_WINDOW;
}

export async function POST(request: Request) {
  try {
    console.log('Email submission received');
    
    // Get IP for rate limiting
    const ip = request.headers.get('x-forwarded-for') || 'unknown-ip';
    console.log('Request IP:', ip);
    
    // Check rate limit
    if (isRateLimited(ip)) {
      console.warn(`Rate limit exceeded for IP: ${ip}`);
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        { status: 429 }
      );
    }
    
    // Parse the request body
    const body = await request.json();
    const { name, email, subject, message, phone, company, service } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required fields' },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Please provide a valid email address' },
        { status: 400 }
      );
    }

    // Check if SMTP credentials are available
    const smtpHost = process.env.SMTP_HOST;
    const smtpPort = process.env.SMTP_PORT;
    const smtpUser = process.env.SMTP_USER;
    const smtpPassword = process.env.SMTP_PASSWORD;
    const smtpSecure = process.env.SMTP_SECURE;
    
    console.log('SMTP Configuration:', { 
      host: smtpHost || '(not set)', 
      port: smtpPort || '(not set)',
      user: smtpUser ? '(set)' : '(not set)', 
      password: smtpPassword ? '(set)' : '(not set)',
      secure: smtpSecure || '(not set)'
    });
    
    // If SMTP credentials are missing, log the form data and return success
    // This allows development/testing without actual email sending
    if (!smtpHost || !smtpUser || !smtpPassword) {
      console.log('SMTP credentials not configured. Form data received:', { name, email, subject, message });
      return NextResponse.json({ 
        success: true, 
        message: 'Form submission logged (SMTP not configured)' 
      });
    }
    
    // Create a transporter using SMTP
    let transporter;
    try {
      transporter = nodemailer.createTransport({
        host: smtpHost || 'ssl0.ovh.net',
        port: parseInt(smtpPort || '587'),
        secure: smtpSecure === 'true',
        auth: {
          user: smtpUser,
          pass: smtpPassword,
        },
        tls: {
          // Do not fail on invalid certs
          rejectUnauthorized: false
        },
        debug: true
      });
      
      console.log('SMTP Transporter created successfully');
    } catch (transporterError) {
      console.error('Error creating SMTP transporter:', transporterError);
      return NextResponse.json(
        { error: 'Failed to configure email service. Please try again later.' },
        { status: 500 }
      );
    }

    // Prepare email content
    const emailSubject = subject || `New contact form submission from ${name}`;
    
    // Create HTML content for admin notification
    const htmlContent = `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ''}
      ${company ? `<p><strong>Company:</strong> ${company}</p>` : ''}
      ${service ? `<p><strong>Service:</strong> ${service}</p>` : ''}
      ${subject ? `<p><strong>Subject:</strong> ${subject}</p>` : ''}
      <h3>Message:</h3>
      <p>${message.replace(/\n/g, '<br>')}</p>
      <hr>
      <p>This email was sent from the contact form on the Pledge website.</p>
    `;

    // Determine the appropriate recipient based on the subject
    let recipient = 'support@pledgeandgrow.com';
    
    // Route emails based on subject
    if (subject === 'Commercial' || subject === 'Partnership' || service === 'web' || service === 'mobile' || service === 'design') {
      recipient = 'commercial@pledgeandgrow.com';
    } else if (subject === 'Investment') {
      recipient = 'investment@pledgeandgrow.com';
    }
    
    // Email options for admin notification
    const adminMailOptions = {
      from: process.env.SMTP_FROM || 'noreply@pledgeandgrow.com',
      to: recipient,
      replyTo: email,
      subject: emailSubject,
      text: `
        Name: ${name}
        Email: ${email}
        ${phone ? `Phone: ${phone}` : ''}
        ${company ? `Company: ${company}` : ''}
        ${service ? `Service: ${service}` : ''}
        ${subject ? `Subject: ${subject}` : ''}
        
        Message:
        ${message}
        
        This email was sent from the contact form on the Pledge website.
      `,
      html: htmlContent,
    };
    
    // Create HTML content for user confirmation
    const userHtmlContent = `
      <h2>Thank you for contacting Pledge & Grow</h2>
      <p>Dear ${name},</p>
      <p>We have received your message regarding "${subject || 'your inquiry'}" and will get back to you as soon as possible.</p>
      <p>Here's a copy of your message:</p>
      <blockquote>
        ${message.replace(/\n/g, '<br>')}
      </blockquote>
      <p>Best regards,</p>
      <p>The Pledge & Grow Team</p>
    `;
    
    // Email options for user confirmation
    const userMailOptions = {
      from: process.env.SMTP_FROM || 'noreply@pledgeandgrow.com',
      to: email,
      subject: `Thank you for contacting Pledge & Grow - ${subject || 'Your inquiry'}`,
      text: `
        Thank you for contacting Pledge & Grow
        
        Dear ${name},
        
        We have received your message regarding "${subject || 'your inquiry'}" and will get back to you as soon as possible.
        
        Here's a copy of your message:
        
        ${message}
        
        Best regards,
        The Pledge & Grow Team
      `,
      html: userHtmlContent,
    };

    try {
      // Verify SMTP connection before sending
      try {
        await transporter.verify();
        console.log('SMTP connection verified successfully');
      } catch (verifyError) {
        console.error('SMTP connection verification failed:', verifyError);
        return NextResponse.json(
          { error: 'Failed to connect to email server. Please try again later.' },
          { status: 500 }
        );
      }
      
      // Send the admin notification email
      try {
        const adminEmailResult = await transporter.sendMail(adminMailOptions);
        console.log('Admin email sent:', adminEmailResult.messageId);
      } catch (adminEmailError) {
        console.error('Error sending admin notification email:', adminEmailError);
        return NextResponse.json(
          { error: 'Failed to send your message. Please try again later.' },
          { status: 500 }
        );
      }
      
      // Send confirmation to user (don't fail the whole process if this fails)
      try {
        const userEmailResult = await transporter.sendMail(userMailOptions);
        console.log('User confirmation email sent:', userEmailResult.messageId);
      } catch (userEmailError) {
        // Log the error but don't fail the whole process
        console.error('Error sending user confirmation email:', userEmailError);
        // Still consider the submission successful if admin notification was sent
      }
      
    } catch (error) {
      console.error('Unexpected error in email sending process:', error);
      return NextResponse.json(
        { error: 'An unexpected error occurred. Please try again later.' },
        { status: 500 }
      );
    }

    // Return success response
    return NextResponse.json({ 
      success: true, 
      message: 'Email sent successfully' 
    });
    
  } catch (error) {
    console.error('Error sending email:', error);
    
    return NextResponse.json(
      { error: 'Failed to send email. Please try again later.' },
      { status: 500 }
    );
  }
}
