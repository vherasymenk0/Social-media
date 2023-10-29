'use client'
import React from 'react'

import RegisterForm from '~/views/register/components/Register.form'
import useStepper from '~/views/register/hooks/useStepper'
import { REGISTER_STEPS } from '~/views/register/Register.constants'

import { Container, Typography } from '@mui/material'
import Step from '@mui/material/Step'
import StepLabel from '@mui/material/StepLabel'
import Stepper from '@mui/material/Stepper'

const RegisterView = () => {
  const { currentStep, ...rest } = useStepper()

  return (
    <Container
      maxWidth="md"
      sx={{
        position: 'absolute',
        left: '0',
        right: '0',
        top: '20%',
      }}
    >
      <Stepper activeStep={currentStep.index} sx={{ height: '2.2rem' }}>
        {REGISTER_STEPS.map(({ step_key, title, optional }) => {
          const labelProps: { optional?: React.ReactNode } = {}
          if (optional) labelProps.optional = <Typography variant="caption">Optional</Typography>

          return (
            <Step key={step_key}>
              <StepLabel
                {...labelProps}
                sx={{ height: '1.75rem', svg: { fill: (theme) => theme.palette.secondary.main } }}
              >
                {title}
              </StepLabel>
            </Step>
          )
        })}
      </Stepper>
      <RegisterForm currentStep={currentStep} {...rest} />
    </Container>
  )
}

export default RegisterView
