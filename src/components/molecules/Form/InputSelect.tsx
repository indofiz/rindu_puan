import React from 'react'
import { VariantProps } from 'class-variance-authority'
import { inputVariant } from './utils/variant'
import Label from '../../atoms/Form/Label'
import { cn } from '../../../utils/classMerge'
import Message from '../../atoms/Form/Message'
import { dataChange } from '../../organism/Form/utils/param'
import { InputProps } from '../../atoms/Form/Input'

export interface OptionProps {
  value: string
  label: string
}

export interface SelectProps
  extends InputProps,
    VariantProps<typeof inputVariant> {
  label: string
  caption?: string
  errorMessage?: any
  onChange: (param: dataChange) => void
  dataOption?: OptionProps[]
}

const InputSelect: React.FC<SelectProps> = (props) => {
  const {
    id = '',
    label,
    className,
    state = 'normal',
    sizes,
    caption,
    errorMessage,
    dataOption
  } = props

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const arg = {
      target: { name: id, value: event.target.value }
    }
    props.onChange(arg)
  }

  return (
    <div className='flex flex-col'>
      <Label id={id} label={label} required={props?.required ? true : false} />

      <select
        className={cn(
          inputVariant({ state, sizes }),
          className,
          'appearance-none'
        )}
        id={id}
        onChange={handleChange}
        value={props.value}
      >
        {dataOption?.length ? (
          <option value='' disabled hidden>
            {props.placeholder}
          </option>
        ) : null}
        {dataOption?.length
          ? dataOption.map((item: OptionProps) => (
              <option key={item?.value} value={item?.value}>
                {item?.label}
              </option>
            ))
          : null}
      </select>
      {caption && (
        <Message message={caption} className='text-xs text-gray-500' />
      )}

      {errorMessage &&
        errorMessage.map((mes: { id: string; message: string; state: any }) => (
          <Message key={mes.id} state={mes.state} message={mes.message} />
        ))}
    </div>
  )
}

export default InputSelect
