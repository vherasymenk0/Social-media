import React, { forwardRef } from 'react'

import { Paper } from '@mui/material'
import { PaperOwnProps } from '@mui/material/Paper/Paper'

const PaperCard = forwardRef<HTMLDivElement, PaperOwnProps>(({ children, sx, ...props }, ref) => (
  <Paper
    ref={ref}
    sx={{
      borderRadius: '0.75rem',
      padding: '1rem',
      mb: 2,
      boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px',
      ...sx,
    }}
    {...props}
  >
    {children}
  </Paper>
))

export default PaperCard
