interface ContentStepper {
  currentStep: string
  isVisible: boolean
  compareStep: string
  children: JSX.Element
}
const Controller: React.FC<ContentStepper> = (props) => {
  const { currentStep, compareStep } = props
  return (
    <>
      {currentStep === compareStep && (
        <section className='flex flex-col gap-2 justify-center mx-auto items-center px-3 max-w-xs'>
          {props.children}
        </section>
      )}
    </>
  )
}

export default Controller
