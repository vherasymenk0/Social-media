'use client'
import NextLink from 'next/link'
import React from 'react'

import { Box, Container, Paper, TextField, Typography } from '@mui/material'
import Button from '@mui/material/Button'
import Link from '@mui/material/Link'

const LoginView = () => {
  const onSubmit = (e) => {
    e.preventDefault()
    console.log('e -->', e)
  }

  return (
    <Container
      maxWidth="sm"
      sx={{
        display: 'flex',
        alignItems: 'center',
        height: 'calc(100vh - 2.5rem)',
      }}
    >
      <Paper
        elevation={2}
        variant="elevation"
        sx={{
          width: '100%',
          padding: '1rem',
        }}
      >
        <Typography variant="h4" component="h1" marginBottom="0.5rem">
          Welcome back!
        </Typography>
        <Typography variant="h5" component="h2" marginBottom="2rem">
          Enter your Credentials to access your account
        </Typography>

        <Box component="form" autoComplete="off" onSubmit={onSubmit}>
          <TextField
            fullWidth
            label="Email"
            type="email"
            placeholder="exmple@gmail.com"
            margin="normal"
          />
          <TextField
            fullWidth
            label="Password"
            type="password"
            autoComplete="current-password"
            margin="normal"
          />
          <NextLink href="/forgot-password">
            <Link underline="always" component="div">
              forgot password
            </Link>
          </NextLink>
          <Button variant="contained" fullWidth type="submit" sx={{ marginTop: '1.5rem' }}>
            Login
          </Button>
        </Box>
      </Paper>
    </Container>
  )
}

export default LoginView
