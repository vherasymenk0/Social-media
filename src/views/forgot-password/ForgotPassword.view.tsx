'use client'
import React from 'react'

import { Box, Container, Paper, TextField, Typography } from '@mui/material'
import Button from '@mui/material/Button'

const ForgotPasswordView = () => {
  const sendCode = () => {}
  const isConfirmed = true

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
          Forgot Password?
        </Typography>
        <Typography variant="h5" component="h2" marginBottom="2rem">
          Don`t worry ! Happens. Please enter your email address to which we will send a
          confirmation code.
        </Typography>

        <Box>
          <Box display="flex" alignItems="center">
            <TextField label="Email" type="email" fullWidth placeholder="exmple@gmail.com" />
            <Button
              variant="contained"
              sx={{ width: '12rem', height: '3.5rem', ml: 3 }}
              onClick={sendCode}
            >
              Send
            </Button>
          </Box>
        </Box>
        {isConfirmed && (
          <>
            <TextField
              id="password"
              fullWidth
              label="Password"
              type="password"
              autoComplete="current-password"
              margin="normal"
            />

            <TextField id="confirm_password" fullWidth label="Confirm password" type="password" />
            <Button variant="contained" fullWidth type="submit" sx={{ marginTop: '1.5rem' }}>
              Update password
            </Button>
          </>
        )}
      </Paper>
    </Container>
  )
}

export default ForgotPasswordView
