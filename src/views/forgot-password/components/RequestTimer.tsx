import React, { FC } from 'react'

import { Box, Typography } from '@mui/material'

interface RequestTimerProps {
  counter: number
}

const RequestTimer: FC<RequestTimerProps> = ({ counter }) => (
  <Box
    sx={{
      color: 'grey.A200',
      fontSize: '0.75rem',
      margin: '0.25rem 0 0 0.5rem',
      height: '1.25rem',
    }}
  >
    You may request a new code in{' '}
    <Typography color="secondary" variant="subtitle2" display="inline">
      {counter}
    </Typography>{' '}
    seconds
  </Box>
)

export default RequestTimer
