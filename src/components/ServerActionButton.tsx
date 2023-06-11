'use client'

import { useTransition } from 'react'
import { redirectToGoogle } from '@/app/actions'

export function ServerActionButton() {
  let [isPending, startTransition] = useTransition()

  // Displays `Redirecting...` text until executing `redirectToGoogle()`
  if (isPending) {
    return <p>Redirecting...</p>
  }

  return (
    <button onClick={() => startTransition(() => redirectToGoogle())}>
      Redirect to Google
    </button>
  )
}
