import React, { FC } from 'react'

import BaseButton from '~/components/BaseButton'
import EmailInput from '~/components/EmailInput'
import PasswordInput from '~/components/PasswordInput'
import StyledCheckbox from '~/components/StyledCheckbox'
import StyledLink from '~/components/StyledLink'

import { Box } from '@mui/material'
import Stack from '@mui/material/Stack'

interface LoginFormProps {}

const LoginForm: FC<LoginFormProps> = ({}) => {
  const onSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <Box component="form" autoComplete="off" onSubmit={onSubmit}>
      <EmailInput />
      <PasswordInput />
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        pl={1}
        pr={1}
        mb={2}
      >
        <StyledCheckbox label="Remember me" />
        <StyledLink href="/forgot-password">Forgot password?</StyledLink>
      </Stack>
      <BaseButton fullWidth type="submit" sx={{ padding: '0.5rem' }}>
        Sign In
      </BaseButton>
    </Box>
  )
}

export default LoginForm
