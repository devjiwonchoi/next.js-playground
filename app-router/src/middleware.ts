import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'

export default function middleware() {
  const cookie = cookies().get('cookie-name')
  return NextResponse.json({ cookie })
}
