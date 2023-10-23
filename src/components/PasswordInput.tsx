import React, { FC, useState } from 'react'

import HttpsIcon from '@mui/icons-material/Https'
import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'
import { TextField } from '@mui/material'
import IconButton from '@mui/material/IconButton'
import InputAdornment from '@mui/material/InputAdornment'
import { TextFieldProps } from '@mui/material/TextField/TextField'

const PasswordInput: FC<Omit<TextFieldProps, 'variant'>> = ({
  sx,
  size,
  label,
  placeholder = 'password',
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false)
  const handleClickShowPassword = () => setShowPassword((show) => !show)

  const isSmallSize = size === 'small'
  const iconFontSize = isSmallSize ? '1.25rem' : '1.5rem'

  return (
    <TextField
      fullWidth
      label={label}
      type={showPassword ? 'text' : 'password'}
      placeholder={placeholder}
      autoComplete="current-password"
      sx={{ mb: 0.5 }}
      size={size}
      InputProps={{
        startAdornment: (
          <HttpsIcon
            color="primary"
            fontSize="small"
            sx={{ marginRight: '0.5rem', fontSize: iconFontSize }}
          />
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
      {...props}
    />
  )
}

export default PasswordInput
