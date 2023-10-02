import type { Metadata } from 'next'
import { ReactNode } from 'react'

export const metadata: Metadata = {
  title: 'Forgot password page',
}

export default function ForgotPasswordLayout({ children }: { children: ReactNode }) {
  return children
}
