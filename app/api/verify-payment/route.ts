// app/api/verify-payment/route.ts
import { NextRequest, NextResponse } from 'next/server'

interface PaymentVerificationResponse {
  status: boolean;
  message: string;
  data?: {
    reference: string;
    amount: number;
    customer: {
      email: string;
    };
  };
}

interface RequestBody {
  reference: string;
  plan: string;
  planName: string;
  amount: number;
  customerEmail: string;
  customerName: string;
  customerPhone: string;
}

export async function POST(request: NextRequest) {
  try {
    const body: RequestBody = await request.json()
    const { reference } = body

    // Verify payment with Paystack
    const response = await fetch(
      `https://api.paystack.co/transaction/verify/${reference}`,
      {
        headers: {
          Authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}`,
          'Content-Type': 'application/json',
        },
      }
    )

    const data: PaymentVerificationResponse = await response.json()

    if (data.status && data.data) {
      // Payment successful
      // Save to database (you would implement your database logic here)
      
      // Example: Save to a database
      // await saveToDatabase({
      //   reference: data.data.reference,
      //   amount: data.data.amount,
      //   customerEmail: data.data.customer.email,
      //   plan: body.plan,
      //   status: 'completed',
      //   createdAt: new Date()
      // })

      return NextResponse.json({
        success: true,
        message: 'Payment verified successfully',
        data: {
          reference: data.data.reference,
          amount: data.data.amount,
          customerEmail: data.data.customer.email
        }
      })
    }

    return NextResponse.json(
      {
        success: false,
        message: data.message || 'Payment verification failed'
      },
      { status: 400 }
    )

  } catch (error) {
    console.error('Payment verification error:', error)
    return NextResponse.json(
      {
        success: false,
        message: error instanceof Error ? error.message : 'Internal server error'
      },
      { status: 500 }
    )
  }
}

// Example database save function (implement according to your DB)
// async function saveToDatabase(paymentData: any) {
//   // Implement your database logic here
//   // This could be Prisma, MongoDB, Firebase, etc.
// }