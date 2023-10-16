import React, { FC } from 'react'

import { Checkbox, FormControlLabel } from '@mui/material'
import { styled } from '@mui/material/styles'

interface StyledCheckboxProps {
  label: string
}

const StyledCheckbox: FC<StyledCheckboxProps> = ({ label }) => (
  <StyledLabel label={label} control={<Checkbox size="small" />} />
)

const StyledLabel = styled(FormControlLabel)(({ theme }) => ({
  color: theme.palette.primary.main,
  '.MuiTypography-root': {
    margin: '2px 0 0 -0.375rem',
  },
}))

export default StyledCheckbox
