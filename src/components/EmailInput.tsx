import React, { FC } from 'react'

import AlternateEmailIcon from '@mui/icons-material/AlternateEmail'
import { TextField } from '@mui/material'

interface EmailInputProps {}

const EmailInput: FC<EmailInputProps> = ({}) => (
  <TextField
    fullWidth
    label="Your Email"
    type="email"
    placeholder="exmple@gmail.com"
    sx={{ mb: 3 }}
    InputProps={{
      startAdornment: (
        <AlternateEmailIcon fontSize="small" color="primary" sx={{ marginRight: '0.5rem' }} />
      ),
      sx: { borderRadius: (theme) => theme.shape.borderRadius },
    }}
  />
)

export default EmailInput
