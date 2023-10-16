'use client'
import React from 'react'

import PaperCard from '~/components/PaperCard'
import LoginForm from '~/views/login/components/LoginForm'

import { Container, Typography } from '@mui/material'

const LoginView = () => (
  <Container
    maxWidth="sm"
    sx={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      height: 'calc(100vh - 2.5rem)',
    }}
  >
    <Typography variant="h3" component="h1" mb={2} color="primary">
      Sign In
    </Typography>
    <Typography variant="body1" component="h2" mb={4} color="primary">
      Welcome back, you’ve been missed!
    </Typography>
    <PaperCard elevation={2} variant="elevation" sx={{ padding: '2.5rem' }}>
      <LoginForm />
    </PaperCard>
  </Container>
)

export default LoginView
