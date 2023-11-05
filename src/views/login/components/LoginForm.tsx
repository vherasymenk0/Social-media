import React, { FC } from 'react'

import BaseButton from '~/components/BaseButton'
import ControlledPasswordField from '~/components/fields/ControlledPasswordField'
import TextInput from '~/components/inputs/TextInput'
import StyledCheckbox from '~/components/StyledCheckbox'
import StyledLink from '~/components/StyledLink'

import AlternateEmailIcon from '@mui/icons-material/AlternateEmail'
import { Box } from '@mui/material'
import Stack from '@mui/material/Stack'

interface LoginFormProps {}

const LoginForm: FC<LoginFormProps> = ({}) => {
  const onSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <Box component="form" autoComplete="off" onSubmit={onSubmit}>
      <TextInput
        value=""
        fullWidth
        sx={{ mb: 3 }}
        id="email"
        label="Your Email"
        type="email"
        placeholder="exmple@gmail.com"
        InputProps={{ startAdornment: <AlternateEmailIcon fontSize="small" color="primary" /> }}
      />
      <ControlledPasswordField label="Your Password" />
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
