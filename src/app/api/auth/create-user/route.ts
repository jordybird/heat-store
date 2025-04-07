// app/api/auth/create-user/route.ts
import { NextResponse } from "next/server"
import { createClient } from "@supabase/supabase-js"
import { sendWelcomeEmail } from "@/lib/mail"

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!,
  {
    auth: {
      autoRefreshToken: false,
      persistSession: false,
    },
  }
)

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { fullName, dob, email, password } = body

    // Create user in Supabase Auth
    const { data, error } = await supabase.auth.admin.createUser({
      email,
      password,
      email_confirm: true,
      user_metadata: {
        fullName,
        dob,
        visitorRole: "customer",
      },
    })

    if (error) {
      console.error("Error creating user:", error)
      return NextResponse.json({ error: error.message }, { status: 400 })
    }

    // Send welcome email
    try {
      await sendWelcomeEmail(email, fullName)
    } catch (emailError) {
      console.error("Failed to send welcome email:", emailError)
      // Continue even if the email fails
    }

    return NextResponse.json({ user: data.user }, { status: 200 })
  } catch (err) {
    console.error("Unexpected server error:", err)
    return NextResponse.json({ error: "Server error" }, { status: 500 })
  }
}
