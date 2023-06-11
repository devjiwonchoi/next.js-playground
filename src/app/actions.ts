// action.ts
'use server'
import { redirect } from 'next/navigation'

export async function redirectToGoogle() {
  redirect('https://google.com')
}
