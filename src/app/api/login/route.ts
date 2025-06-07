// /app/api/login/route.ts
import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  const { email, password } = await req.json()

  const ADMIN_EMAIL = process.env.ADMIN_EMAIL
  const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD

  if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
    return NextResponse.json({ success: true })
  } else {
    return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 })
  }
}
