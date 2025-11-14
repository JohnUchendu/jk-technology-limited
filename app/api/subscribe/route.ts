import { NextResponse } from 'next/server'
import { Resend } from 'resend'

// Initialize Resend with your API key
const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  try {
    const { email, name } = await request.json()

    // Basic validation
    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { error: 'Valid email is required' },
        { status: 400 }
      )
    }

    // Add subscriber to your audience in Resend
    const { data, error } = await resend.contacts.create({
      email: email,
      firstName: name || '',
      audienceId: process.env.RESEND_AUDIENCE_ID || 'your-audience-id', // You create this in Resend dashboard
    })

    if (error) {
      console.error('Resend error:', error)
      return NextResponse.json(
        { error: 'Failed to subscribe. Please try again.' },
        { status: 500 }
      )
    }

    // Optional: Send welcome email
    await resend.emails.send({
      from: 'JKTL Labs <welcome@mail.ibiz.name.ng>',
      to: email,
      subject: 'Welcome to JKT Labs Insights!',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2563eb;">Welcome to JKT Labs!</h2>
          <p>Thank you for subscribing to our newsletter. Here's what you can expect:</p>
          <ul>
            <li>💡 Weekly tech insights and trends</li>
            <li>🚀 Business growth strategies</li>
            <li>🎯 Exclusive tips for Nigerian businesses</li>
            <li>🔔 Early access to promotions</li>
          </ul>
          <p><strong>As a CAC registered company (RC-87373745),</strong> we're committed to helping Nigerian businesses thrive through technology.</p>
          <div style="background-color: #f3f4f6; padding: 16px; border-radius: 8px; margin: 20px 0;">
            <p style="margin: 0; font-size: 14px; color: #6b7280;">
              You're receiving this because you subscribed at jktl.com.ng
            </p>
          </div>
        </div>
      `,
    })

    return NextResponse.json(
      { 
        success: true, 
        message: 'Successfully subscribed! Check your email for welcome message.',
        data 
      },
      { status: 200 }
    )

  } catch (error) {
    console.error('Subscription error:', error)
    return NextResponse.json(
      { error: 'Internal server error. Please try again later.' },
      { status: 500 }
    )
  }
}