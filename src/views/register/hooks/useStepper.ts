import { useState } from 'react'

import { REGISTER_STEPS } from '~/views/register/Register.constants'

const useStepper = () => {
  const [currentStep, setCurrentStep] = useState({ ...REGISTER_STEPS[0], index: 0 })

  const disableBackBtn = currentStep.step_key === 'account_setup'
  const isLastStep = currentStep.index === REGISTER_STEPS.length

  const handleNext = () => {
    setCurrentStep((prevCurrentStep) => {
      const index = prevCurrentStep.index + 1
      return { ...REGISTER_STEPS[index], index }
    })
  }

  const handleBack = () => {
    setCurrentStep((prevCurrentStep) => {
      const index = prevCurrentStep.index - 1
      return { ...REGISTER_STEPS[index], index }
    })
  }

  return {
    currentStep,
    disableBackBtn,
    isLastStep,
    handleNext,
    handleBack,
  }
}

export default useStepper
