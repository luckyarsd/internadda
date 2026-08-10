import { NextResponse } from 'next/server'
import { z } from 'zod'

const ApplicationSchema = z.object({
  fullName: z.string().min(2, 'Name is required'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(6, 'Valid phone number is required'),
  college: z.string().min(2, 'College name is required'),
  graduationYear: z.string().optional(),
  portfolioUrl: z.string().optional(),
  coverNote: z.string().optional(),
  roleId: z.string(),
  roleTitle: z.string(),
  organization: z.string(),
  roleType: z.enum(['internship', 'volunteer']),
})

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const validatedData = ApplicationSchema.parse(body)

    const applicationId = `app_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`

    // Log application payload (or forward to transactional email / Cloudflare KV / log)
    console.log(`[APPLICATION SUBMITTED] ID: ${applicationId}`, {
      role: `${validatedData.roleTitle} (${validatedData.organization})`,
      candidate: `${validatedData.fullName} <${validatedData.email}>`,
      phone: validatedData.phone,
      college: validatedData.college,
    })

    return NextResponse.json({
      success: true,
      applicationId,
      message: 'Your application has been received successfully.',
    })
  } catch (error: any) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: error.errors[0]?.message || 'Validation error' },
        { status: 400 }
      )
    }

    return NextResponse.json(
      { error: 'Internal server error. Please try again later.' },
      { status: 500 }
    )
  }
}
