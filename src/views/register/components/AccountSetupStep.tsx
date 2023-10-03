import React from 'react'

import { Box, TextField, Typography } from '@mui/material'

const AccountSetupStep = () => (
  <>
    <Box>
      <Typography variant="h4" component="h1" marginBottom="2rem" align="center">
        Login Details
      </Typography>
      <Box>
        <TextField
          id="email"
          fullWidth
          label="Email"
          type="email"
          placeholder="exmple@gmail.com"
          margin="normal"
        />
        <TextField
          id="password"
          fullWidth
          label="Password"
          type="password"
          autoComplete="current-password"
          margin="normal"
        />

        <TextField
          id="confirm_password"
          fullWidth
          label="Confirm password"
          type="password"
          margin="normal"
        />
      </Box>
    </Box>
  </>
)

export default AccountSetupStep
