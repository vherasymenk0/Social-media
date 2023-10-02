import type { Metadata } from 'next'
import { ReactNode } from 'react'

export const metadata: Metadata = {
  title: 'Sing-in page',
}

export default function SignInLayout({ children }: { children: ReactNode }) {
  return children
}
