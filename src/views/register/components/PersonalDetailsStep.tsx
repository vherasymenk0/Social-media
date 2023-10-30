'use client'
import DatePicker from '~/components/DatePicker'
import ControllerField from '~/components/fields/ControllerField'
import TextInput from '~/components/inputs/TextInput'
import LocationSelector from '~/views/register/components/LocationSelector'

import { Box, Typography } from '@mui/material'

const PersonalDetailsStep = () => (
  <Box>
    <Typography variant="h4" component="h1" marginBottom="2rem" align="center">
      Profile Details
    </Typography>
    <Box>
      <Box display="flex" justifyContent="space-between" gap={2}>
        <ControllerField
          name="firstName"
          render={({ field, isError }) => (
            <TextInput
              fullWidth
              label="First name"
              placeholder="John"
              size="small"
              {...field}
              error={isError}
            />
          )}
        />
        <ControllerField
          name="lastName"
          render={({ field, isError }) => (
            <TextInput
              fullWidth
              label="Last name"
              placeholder="Doe"
              size="small"
              {...field}
              error={isError}
            />
          )}
        />
      </Box>
      <ControllerField
        name="shortInfo"
        render={({ field, isError }) => (
          <TextInput
            fullWidth
            label="Short info"
            placeholder="About Me"
            size="small"
            multiline
            rows={2}
            {...field}
            error={isError}
          />
        )}
      />
      <LocationSelector />
      <ControllerField
        name="dateOfBirth"
        render={({ field, isError }) => <DatePicker isError={isError} {...field} />}
      />
    </Box>
  </Box>
)

export default PersonalDetailsStep
