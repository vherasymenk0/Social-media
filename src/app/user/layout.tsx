import type { Metadata } from 'next'
import { ReactNode } from 'react'

export const metadata: Metadata = {
  title: 'User page',
}

export default function UserLayout({ children }: { children: ReactNode }) {
  return <main>{children}</main>
}
