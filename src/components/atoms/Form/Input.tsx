import { ChangeEvent, FC, InputHTMLAttributes } from 'react'
import { cn } from '../../../utils/classMerge'
import { dataChange, dataError } from '../../organism/Form/utils/param'

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  onChange: (param: dataChange) => void
  handleError?: (param: dataError) => void
  iconRight?: JSX.Element
  iconLeft?: JSX.Element
  errorMessage?: any
}

const Input: FC<InputProps> = (props) => {
  const { className, iconLeft, iconRight, handleError, errorMessage, ...rest } =
    props
  // HANDLE CHANGE
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const data = { target: { name: e.target.id, value: e.target.value } }
    props.onChange(data)
  }

  const classIconLeft = iconLeft ? 'pl-10' : ''
  const classIconRight = iconRight ? 'pr-10' : ''

  return (
    <div className='relative w-full'>
      {iconLeft && (
        <div className='w-11 absolute top-0 bottom-0 left-0 m-auto flex items-center justify-center z-10'>
          <span>{iconLeft}</span>
        </div>
      )}
      <input
        {...rest}
        className={cn(className, classIconLeft, classIconRight)}
        onChange={handleChange}
      />
      {iconRight && (
        <div className='w-11 absolute top-0 bottom-0 right-0 m-auto flex items-center justify-center z-10'>
          <span>{iconRight}</span>
        </div>
      )}
    </div>
  )
}

export default Input
