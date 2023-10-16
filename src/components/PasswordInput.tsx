import React, { FC, useState } from 'react'

import HttpsIcon from '@mui/icons-material/Https'
import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'
import { TextField } from '@mui/material'
import IconButton from '@mui/material/IconButton'
import InputAdornment from '@mui/material/InputAdornment'

interface PasswordInputProps {}

const PasswordInput: FC<PasswordInputProps> = ({}) => {
  const [showPassword, setShowPassword] = useState(false)

  const handleClickShowPassword = () => setShowPassword((show) => !show)

  return (
    <TextField
      fullWidth
      label="Your Password"
      type={showPassword ? 'text' : 'password'}
      placeholder="password"
      autoComplete="current-password"
      sx={{ mb: 0.5 }}
      InputProps={{
        startAdornment: (
          <HttpsIcon color="primary" fontSize="small" sx={{ marginRight: '0.5rem' }} />
        ),
        endAdornment: (
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleClickShowPassword}
              edge="end"
              color="primary"
            >
              {showPassword ? <VisibilityOff fontSize="small" /> : <Visibility fontSize="small" />}
            </IconButton>
          </InputAdornment>
        ),
        sx: { borderRadius: (theme) => theme.shape.borderRadius },
      }}
    />
  )
}

export default PasswordInput
