import Link from 'next/link'
import * as React from 'react'

import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'

export default function Home() {
  return (
    <main>
      <h1>Home page</h1>
      <Stack spacing={2} direction="row">
        <Button variant="outlined">
          <Link href="/sign-in">Sign-in</Link>
        </Button>
        <Button variant="outlined">
          <Link href="/sign-up">Sign-up</Link>
        </Button>
      </Stack>
    </main>
  )
}
