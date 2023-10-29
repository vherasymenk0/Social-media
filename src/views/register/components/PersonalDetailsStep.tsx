'use client'
import React from 'react'
import { Controller, useFormContext } from 'react-hook-form'

import BaseDatePicker from '~/components/BaseDatePicker'
import TextField from '~/components/fields/TextField'
import LocationSelector from '~/views/register/components/LocationSelector'

import { Box, Typography } from '@mui/material'

const PersonalDetailsStep = () => {
  const { control } = useFormContext()

  return (
    <Box>
      <Typography variant="h4" component="h1" marginBottom="2rem" align="center">
        Profile Details
      </Typography>
      <Box>
        <Box display="flex" justifyContent="space-between" gap={2}>
          <TextField
            fullWidth
            sx={{ mb: 2 }}
            name="firstName"
            label="First name"
            placeholder="John"
            size="small"
          />
          <TextField
            fullWidth
            sx={{ mb: 2 }}
            name="lastName"
            label="Last name"
            placeholder="Doe"
            size="small"
          />
        </Box>
        <TextField
          fullWidth
          sx={{ mb: 2 }}
          name="shortInfo"
          label="Short info"
          placeholder="About Me"
          size="small"
          multiline
          rows={2}
        />
        <LocationSelector />
        <Controller
          name="dateOfBirth"
          control={control}
          render={({ field: { onChange, value } }) => (
            <BaseDatePicker value={value} onChange={onChange} label="Date picker" />
          )}
        />
      </Box>
    </Box>
  )
}

export default PersonalDetailsStep
