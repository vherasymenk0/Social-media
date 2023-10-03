'use client'
import React from 'react'

import useStepper from '~/views/register/hooks/useStepper'
import { REGISTER_STEP_COMPONENT, REGISTER_STEPS } from '~/views/register/Register.constants'

import { Box, Container, Typography } from '@mui/material'
import Button from '@mui/material/Button'
import Step from '@mui/material/Step'
import StepLabel from '@mui/material/StepLabel'
import Stepper from '@mui/material/Stepper'

const RegisterView = () => {
  const { handleNext, handleBack, currentStep, disableBackBtn } = useStepper()

  const CurrentStepComponent = REGISTER_STEP_COMPONENT[currentStep.step_key]
  const onSubmit = () => {}

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
      <Stepper activeStep={currentStep.index}>
        {REGISTER_STEPS.map(({ step_key, title, optional }) => {
          const labelProps: { optional?: React.ReactNode } = {}
          if (optional) labelProps.optional = <Typography variant="caption">Optional</Typography>

          return (
            <Step key={step_key}>
              <StepLabel {...labelProps}>{title}</StepLabel>
            </Step>
          )
        })}
      </Stepper>
      <Box
        component="form"
        autoComplete="off"
        onSubmit={onSubmit}
        maxWidth="30rem"
        sx={{ display: 'flex', flexDirection: 'column', margin: '2rem auto 0' }}
      >
        <Box>
          <CurrentStepComponent />
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
          <Button color="inherit" disabled={disableBackBtn} onClick={handleBack} sx={{ mr: 1 }}>
            Back
          </Button>
          <Box sx={{ flex: '1 1 auto' }} />
          <Button onClick={handleNext}>
            {currentStep.index === REGISTER_STEPS.length - 1 ? 'Finish' : 'Next'}
          </Button>
        </Box>
      </Box>
    </Container>
  )
}

export default RegisterView
