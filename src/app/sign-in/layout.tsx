import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Sing-in page',
  description: 'Generated by create next app',
}

export default function SignInLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <h1>Sign-in page</h1>
      {children}
    </div>
  )
}
