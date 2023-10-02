import type { Metadata } from 'next'
import { ReactNode } from 'react'

export const metadata: Metadata = {
  title: 'Login page',
}

export default function LoginLayout({ children }: { children: ReactNode }) {
  return children
}
