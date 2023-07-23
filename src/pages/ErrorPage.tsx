import { isRouteErrorResponse, useRouteError } from 'react-router-dom'
import { cn } from '../utils/classMerge'
import Lottie from 'lottie-react'
import errorAnim from '../assets/lottie/error.json'

const ErrorPage = () => {
  const error = useRouteError()

  const style = 'text-center h-screen flex justify-center items-center'
  if (isRouteErrorResponse(error)) {
    if (error.status === 404) {
      return (
        <div className={cn(style)}>
          <Lottie style={{ height: 160 }} animationData={errorAnim} />
          <h3 className='font-semibold text-xl'>This page doesn't exist!</h3>
        </div>
      )
    }

    if (error.status === 401) {
      return (
        <div className={cn(style)}>
          <Lottie style={{ height: 160 }} animationData={errorAnim} />
          <h3 className='font-semibold text-xl'>
            You aren't authorized to see this
          </h3>
        </div>
      )
    }

    if (error.status === 503) {
      return (
        <div className={cn(style)}>
          <Lottie style={{ height: 160 }} animationData={errorAnim} />
          <h3 className='font-semibold text-xl'>Looks like API is Down</h3>
        </div>
      )
    }

    if (error.status === 418) {
      return (
        <div className={cn(style)}>
          <Lottie style={{ height: 160 }} animationData={errorAnim} />
          <h3 className='font-semibold text-xl'>SOMETHING IS WRONG</h3>
        </div>
      )
    }
  }

  return (
    <div className={cn(style)}>
      <div>
        <Lottie style={{ height: 200 }} animationData={errorAnim} />
        <h3 className='font-semibold text-xl'>SOMETHING IS WRONG</h3>
      </div>
    </div>
  )

  // rethrow to let the parent error boundary handle it
  // when it's not a special case for this route
  //   throw error
}

export default ErrorPage
