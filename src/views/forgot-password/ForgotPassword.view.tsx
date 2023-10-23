'use client'
import React from 'react'

import PaperCard from '~/components/PaperCard'
import ForgotPasswordForm from '~/views/forgot-password/components/ForgotPasswordForm'

import { Container, Typography } from '@mui/material'

const ForgotPasswordView = () => (
  <Container
    maxWidth="sm"
    sx={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: 'calc(100vh - 2.5rem)',
    }}
  >
    <Typography textAlign="center" variant="h3" component="h1" mb={2} color="primary">
      Forgot Password?
    </Typography>
    <Typography
      textAlign="center"
      variant="body1"
      component="h2"
      mb={4}
      color="primary"
      maxWidth="25rem"
    >
      Please enter your email address to which we will send a confirmation code.
    </Typography>
    <PaperCard sx={{ padding: '2rem' }}>
      <ForgotPasswordForm />
    </PaperCard>
  </Container>
)

export default ForgotPasswordView
