import { useState } from 'react'

interface StepperProps {
  children(
    prevStep: () => void,
    nextStep: () => void,
    CurrentStep: string,
    steps: {}
  ): void
  steps: {}
  initialStep: string
}
const Stepper: React.FC<StepperProps> = (props) => {
  const { steps, initialStep } = props
  const stepsKeys = Object.keys({ ...steps })

  const [CurrentStep, setCurrentStep] = useState<string>(
    stepsKeys.indexOf(initialStep) > -1 ? initialStep : stepsKeys[0]
  )

  const totalStep = stepsKeys.length
  const indexStep = stepsKeys.indexOf(CurrentStep)

  function prevStep() {
    if (+indexStep > 0) setCurrentStep(stepsKeys[indexStep - 1])
  }

  function nextStep() {
    if (+indexStep < totalStep) setCurrentStep(stepsKeys[indexStep + 1])
  }

  return <>{props.children(prevStep, nextStep, CurrentStep, steps)}</>
}

export default Stepper
