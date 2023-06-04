'use client'

import { notFound, usePathname } from 'next/navigation'

export default function Test() {
  const pathname = usePathname()

  if (pathname === '/404') notFound()

  return <h1>This is Dynamic Route Page</h1>
}
