import React, { FC, useLayoutEffect, useState } from 'react'

import BaseButton from '~/components/BaseButton'
import ControlledPasswordField from '~/components/fields/ControlledPasswordField'
import TextInput from '~/components/inputs/TextInput'
import useTimer from '~/hooks/useTimer'
import Toaster from '~/services/toaster/Toaster.service'
import ConfirmCode from '~/views/forgot-password/components/ConfirmCode'
import RequestTimer from '~/views/forgot-password/components/RequestTimer'

import AlternateEmailIcon from '@mui/icons-material/AlternateEmail'
import { Box } from '@mui/material'

interface ForgotPasswordFormProps {}

const IS_CODE_SENT_KEY = 'is_code_sent'

const ForgotPasswordForm: FC<ForgotPasswordFormProps> = ({}) => {
  const [isCodeSent, setIsCodeSent] = useState(false)
  const [isConfirmed, setIsConfirmed] = useState(false)
  const { toggleTimer, timerStarted, counter } = useTimer({ initValue: 20 })

  const updatePassword = () => {
    setIsCodeSent(false)
    setIsConfirmed(false)
    sessionStorage.removeItem(IS_CODE_SENT_KEY)
    Toaster.success('The password was successfully updated')
  }

  const confirmCode = () => {
    setIsConfirmed((prev) => !prev)
  }

  const sendCode = () => {
    toggleTimer()
    sessionStorage.setItem(IS_CODE_SENT_KEY, 'true')
    setIsCodeSent(true)
  }

  useLayoutEffect(() => {
    const codeSent = sessionStorage.getItem(IS_CODE_SENT_KEY)
    if (codeSent) setIsCodeSent(true)
  }, [timerStarted])

  if (isConfirmed)
    return (
      <Box sx={{ width: '25rem' }}>
        <ControlledPasswordField size="small" placeholder="new password" />
        <BaseButton fullWidth type="submit" sx={{ marginTop: '1rem' }} onClick={updatePassword}>
          Update password
        </BaseButton>
      </Box>
    )

  return (
    <Box sx={{ width: '25rem' }}>
      {isCodeSent ? (
        <ConfirmCode
          timerStarted={timerStarted}
          counter={counter}
          sendCode={sendCode}
          confirmCode={confirmCode}
        />
      ) : (
        <>
          <Box display="flex" alignItems="center">
            <TextInput
              size="small"
              value=""
              fullWidth
              id="email"
              label="Your Email"
              type="email"
              placeholder="exmple@gmail.com"
              inputProps={{
                startAdornment: <AlternateEmailIcon fontSize="small" color="primary" />,
              }}
            />
            <BaseButton
              disabled={timerStarted}
              sx={{ width: '8rem', height: '2.5rem', ml: 1 }}
              onClick={sendCode}
            >
              Send
            </BaseButton>
          </Box>
          {timerStarted && <RequestTimer counter={counter} />}
        </>
      )}
    </Box>
  )
}
export default ForgotPasswordForm
