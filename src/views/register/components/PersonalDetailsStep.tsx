'use client'
import React from 'react'

import BaseDatePicker from '~/components/BaseDatePicker'
import LocationSelector from '~/views/register/components/LocationSelector'

import { Box, TextField, Typography } from '@mui/material'

const PersonalDetailsStep = () => (
  <Box>
    <Typography variant="h4" component="h1" marginBottom="2rem" align="center">
      Profile Details
    </Typography>
    <Box>
      <Box display="flex" justifyContent="space-between" gap={2}>
        <TextField
          id="first-name"
          placeholder="John"
          label="First name"
          variant="outlined"
          size="small"
          sx={{ '.MuiInputBase-root': { borderRadius: '0.5rem' } }}
          fullWidth
        />
        <TextField
          id="last-name"
          placeholder="Doe"
          label="Last name"
          variant="outlined"
          size="small"
          sx={{ '.MuiInputBase-root': { borderRadius: '0.5rem' } }}
          fullWidth
        />
      </Box>
      <TextField
        id="about-me"
        label="Short info"
        placeholder="About Me"
        size="small"
        multiline
        rows={2}
        fullWidth
        margin="normal"
        sx={{ '.MuiInputBase-root': { borderRadius: '0.5rem' } }}
      />
      <LocationSelector />
      <BaseDatePicker disableFuture label="Date of Birth" sx={{ width: '100%', mt: 2 }} />
    </Box>
  </Box>
)

export default PersonalDetailsStep
