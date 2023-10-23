import './globals.css'
import { ReactNode } from 'react'

import ToasterInitializer from '~/services/toaster/ToasterInitializer'
import ThemeRegistry from '~/theme/ThemeRegistry'

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <ThemeRegistry>
        <body>{children}</body>
        <ToasterInitializer />
      </ThemeRegistry>
    </html>
  )
}
