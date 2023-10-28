import * as React from 'react'
import { FC } from 'react'

import StyledDropdown from '~/components/StyledDropdown'

import { Box } from '@mui/material'

interface LocationSelectorProps {}

const testOptions = [
  {
    name: 'Ukraine',
    value: 'UK',
  },
  {
    name: 'Germany',
    value: 'GE',
  },
  {
    name: 'Poland',
    value: 'PL',
  },
]

const LocationSelector: FC<LocationSelectorProps> = ({}) => (
  <Box display="flex" justifyContent="space-between" gap={2} mt="0.5rem">
    <StyledDropdown options={testOptions} label="Country" />
    <StyledDropdown options={testOptions} label="City" />
  </Box>
)

export default LocationSelector
