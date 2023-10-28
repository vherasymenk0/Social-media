import React from 'react'

import EmailInput from '~/components/EmailInput'
import PasswordInput from '~/components/PasswordInput'

import { Box, Typography } from '@mui/material'

const AccountSetupStep = () => (
  <>
    <Box>
      <Typography variant="h4" component="h1" marginBottom="2rem" align="center" color="primary">
        Login Details
      </Typography>
      <Box>
        <EmailInput />
        <PasswordInput id="password" label="Password" margin="normal" />
        <PasswordInput id="confirm_password" label="Confirm password" margin="normal" />
      </Box>
    </Box>
  </>
)

export default AccountSetupStep
