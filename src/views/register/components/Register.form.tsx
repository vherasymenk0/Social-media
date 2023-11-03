import React, { FC } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import * as yup from 'yup'

import BaseButton from '~/components/BaseButton'
import { REGISTER_STEP_COMPONENT, REGISTER_STEPS } from '~/views/register/Register.constants'
import { Step } from '~/views/register/Register.types'

import { yupResolver } from '@hookform/resolvers/yup'
import { Box } from '@mui/material'

interface RegisterFormProps {
  currentStep: Step & { index: number }
  disableBackBtn: boolean
  isLastStep: boolean
  handleNext: () => void
  handleBack: () => void
}

const schema = yup.object({
  email: yup.string().required(),
  password: yup.number().positive().integer().required(),
  dateOfBirth: yup.string().required(),
})

const RegisterForm: FC<RegisterFormProps> = ({
  currentStep,
  isLastStep,
  disableBackBtn,
  handleBack,
  handleNext,
}) => {
  const CurrentStepComponent = REGISTER_STEP_COMPONENT[currentStep.step_key]
  const methods = useForm({
    defaultValues: {
      email: '',
      password: '',
      confirmPassword: '',
      firstName: '',
      lastName: '',
      shortInfo: '',
      country: '',
      city: '',
      dateOfBirth: '',
      profileImg: '',
    },
    resolver: yupResolver(schema),
    mode: 'onChange',
  })
  const onSubmit = () => {}

  const { watch } = methods
  console.log('watch -->', watch())
  return (
    <FormProvider {...methods}>
      <Box
        component="form"
        autoComplete="off"
        onSubmit={onSubmit}
        maxWidth="30rem"
        sx={{ display: 'flex', flexDirection: 'column', margin: '2rem auto 0' }}
      >
        <Box>
          <CurrentStepComponent />
        </Box>{' '}
        <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
          <BaseButton variant="outlined" disabled={disableBackBtn} onClick={handleBack}>
            Back
          </BaseButton>
          <Box sx={{ flex: '1 1 auto' }} />
          <BaseButton onClick={handleNext}>
            {currentStep.index === REGISTER_STEPS.length - 1 ? 'Finish' : 'Next'}
          </BaseButton>
        </Box>
      </Box>
    </FormProvider>
  )
}

export default RegisterForm
