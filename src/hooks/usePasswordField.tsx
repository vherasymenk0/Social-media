import React, { useState } from 'react'

import HttpsIcon from '@mui/icons-material/Https'
import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'
import IconButton from '@mui/material/IconButton'
import { InputBasePropsSizeOverrides } from '@mui/material/InputBase/InputBase'
import { OverridableStringUnion } from '@mui/types'

interface Props {
  size?: OverridableStringUnion<'small' | 'medium', InputBasePropsSizeOverrides>
}

const usePasswordField = ({ size }: Props) => {
  const [showPassword, setShowPassword] = useState(false)
  const toggleVisiblePassword = () => setShowPassword((show) => !show)

  const defaultProps = {
    formControlProps: {
      fullWidth: true,
    },
    type: showPassword ? 'text' : 'password',
    autoComplete: 'current-password',
    size,
    startAdornment: <HttpsIcon color="primary" fontSize="small" sx={{ marginRight: '0.5rem' }} />,
    endAdornment: (
      <IconButton
        aria-label="toggle password visibility"
        onClick={toggleVisiblePassword}
        edge="end"
        color="primary"
      >
        {showPassword ? <VisibilityOff fontSize="small" /> : <Visibility fontSize="small" />}
      </IconButton>
    ),
  }

  return {
    defaultProps,
  }
}

export default usePasswordField
