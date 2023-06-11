import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname.startsWith('/@')) {
    return NextResponse.rewrite(new URL('/animal', request.nextUrl))
  }
  if (request.nextUrl.pathname === '/animal') {
    return NextResponse.redirect(new URL('/404', request.nextUrl))
  }
}
