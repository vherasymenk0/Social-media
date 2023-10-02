import type { Metadata } from 'next'
import { ReactNode } from 'react'

export const metadata: Metadata = {
  title: 'Register page',
}

export default function RegisterLayout({ children }: { children: ReactNode }) {
  return children
}
