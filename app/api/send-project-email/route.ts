import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    // Parse the request body
    const body = await request.json();
    const { 
      name, 
      email, 
      company, 
      phone, 
      projectType, 
      projectName, 
      projectDescription, 
      targetAudience,
      startDate,
      deadline,
      flexibility,
      budgetRange,
      budgetAmount,
      paymentPreference
    } = body;

    // Validate required fields
    if (!name || !email || !projectType) {
      return NextResponse.json(
        { error: 'Name, email, and project type are required fields' },
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

    // Create a transporter using SMTP
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    // Prepare email content
    const emailSubject = `New Project Request: ${projectName || projectType}`;
    
    // Format budget information
    const getBudgetRangeText = () => {
      switch(budgetRange) {
        case '0-1000': return 'Less than €1,000';
        case '1000-5000': return '€1,000 - €5,000';
        case '5000-10000': return '€5,000 - €10,000';
        case '10000+': return 'More than €10,000';
        default: return budgetRange;
      }
    };

    const getPaymentPreferenceText = () => {
      switch(paymentPreference) {
        case 'milestone': return 'Payment by milestone';
        case 'monthly': return 'Monthly payments';
        case 'completion': return 'Payment upon completion';
        default: return paymentPreference;
      }
    };

    const getFlexibilityText = () => {
      switch(flexibility) {
        case 'strict': return 'Strict deadline';
        case 'moderate': return 'Somewhat flexible';
        case 'flexible': return 'Flexible timeline';
        default: return flexibility;
      }
    };

    const getProjectTypeText = () => {
      switch(projectType) {
        case 'web': return 'Web Development';
        case 'mobile': return 'Mobile App';
        case 'design': return 'Design Project';
        case 'consulting': return 'Consulting';
        default: return projectType;
      }
    };
    
    // Create HTML content
    const htmlContent = `
      <h2>New Project Request</h2>
      
      <h3>Project Information</h3>
      <p><strong>Project Type:</strong> ${getProjectTypeText()}</p>
      <p><strong>Project Name:</strong> ${projectName || 'Not specified'}</p>
      <p><strong>Description:</strong> ${projectDescription || 'Not specified'}</p>
      <p><strong>Target Audience:</strong> ${targetAudience || 'Not specified'}</p>
      
      <h3>Timeline</h3>
      <p><strong>Start Date:</strong> ${startDate || 'Not specified'}</p>
      ${deadline ? `<p><strong>Deadline:</strong> ${deadline}</p>` : ''}
      <p><strong>Flexibility:</strong> ${getFlexibilityText()}</p>
      
      <h3>Budget</h3>
      <p><strong>Budget Range:</strong> ${getBudgetRangeText()}</p>
      ${budgetAmount ? `<p><strong>Budget Amount:</strong> €${budgetAmount}</p>` : ''}
      <p><strong>Payment Preference:</strong> ${getPaymentPreferenceText()}</p>
      
      <h3>Contact Information</h3>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      ${company ? `<p><strong>Company:</strong> ${company}</p>` : ''}
      ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ''}
      
      <hr>
      <p>This email was sent from the project request form on the Pledge website.</p>
    `;

    // Email options
    const mailOptions = {
      from: process.env.SMTP_FROM || 'noreply@pledgeandgrow.com',
      to: 'commercial@pledgeandgrow.com',
      replyTo: email,
      subject: emailSubject,
      text: `
        NEW PROJECT REQUEST
        
        PROJECT INFORMATION
        Project Type: ${getProjectTypeText()}
        Project Name: ${projectName || 'Not specified'}
        Description: ${projectDescription || 'Not specified'}
        Target Audience: ${targetAudience || 'Not specified'}
        
        TIMELINE
        Start Date: ${startDate || 'Not specified'}
        ${deadline ? `Deadline: ${deadline}` : ''}
        Flexibility: ${getFlexibilityText()}
        
        BUDGET
        Budget Range: ${getBudgetRangeText()}
        ${budgetAmount ? `Budget Amount: €${budgetAmount}` : ''}
        Payment Preference: ${getPaymentPreferenceText()}
        
        CONTACT INFORMATION
        Name: ${name}
        Email: ${email}
        ${company ? `Company: ${company}` : ''}
        ${phone ? `Phone: ${phone}` : ''}
        
        This email was sent from the project request form on the Pledge website.
      `,
      html: htmlContent,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    // Return success response
    return NextResponse.json({ 
      success: true, 
      message: 'Project request sent successfully' 
    });
    
  } catch (error) {
    console.error('Error sending project request:', error);
    
    return NextResponse.json(
      { error: 'Failed to send project request. Please try again later.' },
      { status: 500 }
    );
  }
}
