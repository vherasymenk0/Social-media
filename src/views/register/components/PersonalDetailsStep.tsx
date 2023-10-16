'use client'
import React from 'react'

import BaseDatePicker from '~/components/BaseDatePicker'
import { COUNTRIES_LIST } from '~/utils/constants/countries.constant'

import { Autocomplete, Box, TextField, Typography } from '@mui/material'

const PersonalDetailsStep = () => (
  <Box>
    <Typography variant="h4" component="h1" marginBottom="2rem" align="center">
      Profile Details
    </Typography>
    <Box>
      <Box display="flex" justifyContent="space-between">
        <TextField id="first-name" label="First name" type="text" placeholder="John" />
        <TextField id="last-name" label="Last name" type="text" placeholder="Doe" />
      </Box>
      <TextField id="about_me" label="About Me" multiline rows={3} fullWidth margin="normal" />
      <Box display="flex" justifyContent="space-between" mt="0.5rem">
        <Autocomplete
          id="country-select-demo"
          sx={{ width: '48%' }}
          options={COUNTRIES_LIST}
          autoHighlight
          renderOption={(props, option) => (
            <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
              {option}
            </Box>
          )}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Choose a country"
              inputProps={{
                ...params.inputProps,
                autoComplete: 'new-password',
              }}
            />
          )}
        />
        <BaseDatePicker disableFuture label="Date of Birth" sx={{ width: '48%' }} />
      </Box>
    </Box>
  </Box>
)

export default PersonalDetailsStep
