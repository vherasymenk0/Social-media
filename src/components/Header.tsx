import Link from 'next/link'
import React from 'react'

import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'

const Header = (props: {}) => (
  <Stack spacing={2} direction="row">
    <Link href="/">
      <Button variant="outlined">Login</Button>
    </Link>
    <Link href="/register">
      <Button variant="outlined">Register</Button>
    </Link>
  </Stack>
)

export default Header
