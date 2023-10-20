import React, { FC } from 'react'

import BaseButton from '~/components/BaseButton'
import RequestTimer from '~/views/forgot-password/components/RequestTimer'

import { Box, TextField } from '@mui/material'
import { styled } from '@mui/material/styles'

interface ConfirmCodeProps {
  timerStarted: boolean
  counter: number
  sendCode: () => void
  confirmCode: () => void
}

const ConfirmCode: FC<ConfirmCodeProps> = ({ timerStarted, counter, sendCode, confirmCode }) => (
  <>
    <Box display="flex" alignItems="center">
      <StyledCodeInput fullWidth type="number" placeholder="Code" size="small" />
      <BaseButton sx={{ width: '8rem', height: '2.5rem', ml: 1 }} onClick={confirmCode}>
        Confirm
      </BaseButton>
    </Box>
    {timerStarted ? (
      <RequestTimer counter={counter} />
    ) : (
      <Box
        onClick={sendCode}
        sx={{
          color: 'secondary.main',
          padding: '0.25rem 0 0 0.5rem',
          fontSize: '0.75rem',
          textDecoration: 'underline',
          cursor: 'pointer',
        }}
      >
        Resend
      </Box>
    )}
  </>
)

const StyledCodeInput = styled(TextField)({
  '.MuiInputBase-root': {
    borderRadius: '0.5rem',
  },
  input: {
    '&::-webkit-outer-spin-button, &::-webkit-inner-spin-button': {
      WebkitAppearance: 'none',
      margin: 0,
    },
    '&[type=number]': {
      MozAppearance: 'textfield',
    },
  },
})

export default ConfirmCode
