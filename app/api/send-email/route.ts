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
    const { name, email, subject, message, phone, company, service, to } = body;

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
      // OVH SMTP Configuration
      // For OVH Roundcube mail with @pledgeandgrow.com
      const useOvhDefaults = !smtpHost || smtpHost.includes('ovh');
      
      const transportConfig = {
        host: useOvhDefaults ? 'ssl0.ovh.net' : smtpHost,
        port: parseInt(smtpPort || (useOvhDefaults ? '587' : '25')),
        secure: smtpSecure === 'true' || (useOvhDefaults && false), // OVH typically uses STARTTLS (not secure:true)
        auth: {
          user: smtpUser, // Should be full email address for OVH
          pass: smtpPassword,
        },
        tls: {
          // Do not fail on invalid certs
          rejectUnauthorized: false
        },
        debug: true
      };
      
      console.log('Creating SMTP transport with config:', {
        host: transportConfig.host,
        port: transportConfig.port,
        secure: transportConfig.secure,
        user: transportConfig.auth.user ? '(set)' : '(not set)',
        usingOvhDefaults: useOvhDefaults
      });
      
      transporter = nodemailer.createTransport(transportConfig);
      
      // Verify SMTP connection configuration
      await transporter.verify().catch(error => {
        console.error('SMTP Verification failed:', error);
        throw new Error(`SMTP verification failed: ${error.message}`);
      });
      
      console.log('SMTP Transporter created and verified successfully');
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
    
    // Use the provided 'to' field if available
    if (to) {
      recipient = to;
      console.log(`Using provided recipient email: ${recipient}`);
    }
    // Otherwise route emails based on subject
    else if (subject === 'Commercial' || subject === 'Partnership' || service === 'web' || service === 'mobile' || service === 'design') {
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
      // Send email to admin with better error handling
      console.log(`Attempting to send admin notification to ${recipient}...`);
      try {
        const adminInfo = await transporter.sendMail(adminMailOptions);
        console.log(`Admin notification sent successfully to ${recipient}`);
        console.log(`Message ID: ${adminInfo.messageId}`);
      } catch (adminEmailError) {
        console.error(`Failed to send admin notification to ${recipient}:`, adminEmailError);
        throw new Error(`Admin email failed: ${adminEmailError.message}`);
      }
      
      // Send confirmation to user with better error handling
      console.log(`Attempting to send confirmation email to ${email}...`);
      try {
        const userInfo = await transporter.sendMail(userMailOptions);
        console.log(`Confirmation email sent successfully to ${email}`);
        console.log(`Message ID: ${userInfo.messageId}`);
      } catch (userEmailError) {
        // Log error but don't fail the whole request if only user email fails
        console.error(`Failed to send confirmation to ${email}:`, userEmailError);
        // Continue processing as admin notification is more important
      }
      
      return NextResponse.json({ 
        success: true,
        message: 'Email sent successfully',
        recipient: recipient
      });
    } catch (error) {
      console.error('Error in email sending process:', error);
      // Log detailed error information
      if (error instanceof Error) {
        console.error('Error name:', error.name);
        console.error('Error message:', error.message);
        console.error('Error stack:', error.stack);
      }
      
      return NextResponse.json(
        { 
          error: 'Failed to send email. Please try again later.',
          details: error instanceof Error ? error.message : 'Unknown error'
        },
        { status: 500 }
      );
    }

  } catch (error) {
    console.error('Error in API route:', error);
    
    return NextResponse.json(
      { error: 'Failed to process request. Please try again later.' },
      { status: 500 }
    );
  }
}
