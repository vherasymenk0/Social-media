import './globals.css'
import type { Metadata } from 'next'
import { ReactNode } from 'react'

import Header from '~/components/Header'
import ThemeRegistry from '~/theme/ThemeRegistry'

import { Box } from '@mui/material'

export const metadata: Metadata = {
  title: 'Home page',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <ThemeRegistry>
        <body>
          <nav>
            <Header />
          </nav>
          <Box component="main">{children}</Box>
        </body>
      </ThemeRegistry>
    </html>
  )
}
