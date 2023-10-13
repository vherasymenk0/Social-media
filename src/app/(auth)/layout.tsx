import { ReactNode } from 'react'

import Header from '~/components/Header'

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <nav>
        <Header />
      </nav>
      <main>{children}</main>
    </>
  )
}
