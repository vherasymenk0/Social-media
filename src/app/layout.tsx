import './globals.css'
import { ReactNode } from 'react'

import { ToasterProvider } from '~/contexts/Toaster.context'
import ThemeRegistry from '~/theme/ThemeRegistry'

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <ThemeRegistry>
        <ToasterProvider>
          <body>{children}</body>
        </ToasterProvider>
      </ThemeRegistry>
    </html>
  )
}
