import { ChangeEvent, FC, InputHTMLAttributes } from 'react'
import { dataChange } from '../../organism/Form/utils/param'

export interface RadioProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  onChange: (param: dataChange) => void
  idRadioGroup?: string
  handleError?: (param: dataChange) => void
}

const Radio: FC<RadioProps> = (props) => {
  const { label, id, value, name, idRadioGroup, ...rest } = props
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const datas = { target: { name: `${idRadioGroup}`, value: e.target.value } }
    props.onChange(datas)
  }

  return (
    <div className='flex items-center px-3 cursor-pointer'>
      <input
        {...rest}
        onChange={handleChange}
        id={id}
        type='radio'
        value={value}
        name={name}
        className='w-4 h-4 text-blue-600 bg-white border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
      />
      <label
        htmlFor={id}
        className='ml-2 text-sm cursor-pointer font-medium w-full py-2 before:content-[""] before:block before:w-full before:h-full'
      >
        {label}
      </label>
    </div>
  )
}

export default Radio
