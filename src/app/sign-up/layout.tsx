import type { Metadata } from 'next'
import { ReactNode } from 'react'

export const metadata: Metadata = {
  title: 'Sing-up page',
}

export default function SignUpLayout({ children }: { children: ReactNode }) {
  return children
}
