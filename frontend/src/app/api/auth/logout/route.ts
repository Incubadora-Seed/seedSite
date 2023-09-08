import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {

  const redirectURL = new URL('/admin', request.url) // Redirect to admin page

  return NextResponse.redirect(redirectURL, { // Redirect to admin page
    headers: {
      'Set-Cookie': `token=; Path=/admin; max-age=0;`, // Set token cookie
    },
  })
}