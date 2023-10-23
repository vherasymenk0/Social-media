import React, { FC } from 'react'

import AlternateEmailIcon from '@mui/icons-material/AlternateEmail'
import { TextField } from '@mui/material'
import { TextFieldProps } from '@mui/material/TextField/TextField'

const EmailInput: FC<Omit<TextFieldProps, 'variant'>> = ({ sx, size, ...props }) => {
  const isSmallSize = size === 'small'
  const iconFontSize = isSmallSize ? '1.25rem' : '1.5rem'

  return (
    <TextField
      fullWidth
      label="Your Email"
      type="email"
      placeholder="exmple@gmail.com"
      sx={sx}
      size={size}
      InputProps={{
        startAdornment: (
          <AlternateEmailIcon
            color="primary"
            sx={{ marginRight: '0.5rem', fontSize: iconFontSize }}
          />
        ),
        sx: { borderRadius: (theme) => theme.shape.borderRadius },
      }}
      {...props}
    />
  )
}

export default EmailInput
