import Link from 'next/link'
import React from 'react'

import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'

const Header = (props) => (
  <Stack spacing={2} direction="row">
    <Button variant="outlined">
      <Link href="/">Home</Link>
    </Button>
    <Button variant="outlined">
      <Link href="/sign-in">Sign-in</Link>
    </Button>
    <Button variant="outlined">
      <Link href="/sign-up">Sign-up</Link>
    </Button>
  </Stack>
)

export default Header
