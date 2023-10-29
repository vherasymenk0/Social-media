import React from 'react'

import PasswordField from '~/components/fields/PasswordField'
import TextField from '~/components/fields/TextField'

import AlternateEmailIcon from '@mui/icons-material/AlternateEmail'
import { Box, Typography } from '@mui/material'

const AccountSetupStep = () => (
  <>
    <Box>
      <Typography variant="h4" component="h1" marginBottom="2rem" align="center" color="primary">
        Login Details
      </Typography>
      <Box>
        <TextField
          fullWidth
          sx={{ mb: 2 }}
          name="email"
          label="Your Email"
          type="email"
          placeholder="exmple@gmail.com"
          InputProps={{
            startAdornment: <AlternateEmailIcon fontSize="small" color="primary" />,
          }}
        />
        <PasswordField name="password" label="Password" sx={{ mb: 2 }} />
        <PasswordField name="confirmPassword" label="Confirm password" />
      </Box>
    </Box>
  </>
)

export default AccountSetupStep
