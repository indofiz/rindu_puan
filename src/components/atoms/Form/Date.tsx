import { FC, useState } from 'react'
import DatePicker from 'react-datepicker'
import './style/datepicker.css'

import clxs from 'clsx'
import { cn } from '../../../utils/classMerge'
import { dataChange } from '../../organism/Form/utils/param'

interface InputDateProps {
  id: string
  className?: string
  value: string | number
  start?: number
  stop?: number
  withPortal?: boolean
  format?: string
  placeholder?: string
  onChange: (param: dataChange) => void
}

const ArrowLeft = () => (
  <svg xmlns='http://www.w3.org/2000/svg' width={24} height={24} fill='none'>
    <path
      fill='#414D46'
      d='M15.42 7.41 10.83 12l4.59 4.59L14 18l-6-6 6-6 1.42 1.41Z'
    />
  </svg>
)

const ArrowRight = () => (
  <svg xmlns='http://www.w3.org/2000/svg' width={24} height={24} fill='none'>
    <path
      fill='#414D46'
      d='M8.58 7.41 13.17 12l-4.59 4.59L10 18l6-6-6-6-1.42 1.41Z'
    />
  </svg>
)

const DatePick: FC<InputDateProps> = (props) => {
  const {
    start = 1910,
    stop = new Date().getFullYear() + 1,
    format,
    id,
    withPortal = false,
    placeholder
  } = props
  const [startDate, setStartDate] = useState<Date | null>(null)

  const handleChange = (date: Date) => {
    setStartDate(date)
    const data = {
      target: { name: id, value: Math.floor(date.getTime() / 1000).toString() }
    }
    props.onChange(data)
  }

  const range = (start: number, stop: number, step: number) =>
    Array.from(
      { length: (stop - start) / step + 1 },
      (_, i) => start + i * step
    )
  const years = range(start, stop, 1)

  const months = [
    'Januari',
    'Februari',
    'Maret',
    'April',
    'Mei',
    'Juni',
    'Juli',
    'Agustus',
    'September',
    'Oktober',
    'November',
    'Desember'
  ]

  const buttonClassName = clxs(
    'p-1 sm:p-2 md:p-3',
    'border',
    'border-gray-200',
    'rounded-md',
    'shadow-sm',
    'hover:bg-gray-100'
  )

  const customHeader = ({
    date,
    changeYear,
    changeMonth,
    decreaseMonth,
    increaseMonth,
    prevMonthButtonDisabled,
    nextMonthButtonDisabled
  }: any) => (
    <div>
      <div className='flex justify-between gap-1 px-2 items-center'>
        <button
          className={buttonClassName}
          onClick={decreaseMonth}
          disabled={prevMonthButtonDisabled}
        >
          <ArrowLeft />
        </button>
        <h4 className='text-md sm:text-lg my-4 text-black font-semibold font-poppins uppercase'>{`${date.getDate()} ${
          months[date.getMonth()]
        } ${date.getFullYear()}`}</h4>
        <button
          className={buttonClassName}
          onClick={increaseMonth}
          disabled={nextMonthButtonDisabled}
        >
          <ArrowRight />
        </button>
      </div>
      <div className='flex gap-1 justify-between px-2 mb-4 mt-2 py-0'>
        <select
          className='border border-gray-300 rounded flex-1 py-1 sm:py-3 lg:py-4'
          value={date.getFullYear()}
          onChange={({ target: { value } }) => changeYear(value)}
        >
          {years.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>

        <select
          className='border border-gray-300 flex-1 rounded py-1 sm:py-3 lg:py-4'
          value={months[date.getMonth()]}
          onChange={({ target: { value } }) =>
            changeMonth(months.indexOf(value))
          }
        >
          {months.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
    </div>
  )
  return (
    <div className='relative w-full'>
      <DatePicker
        autoComplete='off'
        id={id}
        disabled={false}
        dateFormat={format}
        renderCustomHeader={customHeader}
        className={cn(props.className)}
        selected={startDate}
        onChange={handleChange}
        withPortal={withPortal}
        placeholderText={placeholder}
      />

      <div className='w-11 absolute top-0 bottom-0 right-0 m-auto flex items-center justify-center z-10'>
        <span>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width={20}
            height={20}
            fill='none'
          >
            <path
              fill='#8C8C8C'
              d='M6.667 11.667a.807.807 0 0 1-.595-.24.803.803 0 0 1-.239-.594c0-.236.08-.434.24-.594.16-.16.358-.24.594-.239.236 0 .434.08.594.24.16.16.24.358.239.593 0 .236-.08.434-.24.595a.803.803 0 0 1-.593.239Zm3.333 0a.807.807 0 0 1-.594-.24.803.803 0 0 1-.24-.594c0-.236.08-.434.24-.594.16-.16.358-.24.594-.239.236 0 .434.08.594.24.16.16.24.358.24.593 0 .236-.08.434-.24.595a.803.803 0 0 1-.594.239Zm3.333 0a.807.807 0 0 1-.594-.24.803.803 0 0 1-.239-.594c0-.236.08-.434.24-.594.16-.16.358-.24.593-.239.236 0 .434.08.595.24.16.16.24.358.239.593 0 .236-.08.434-.24.595a.803.803 0 0 1-.594.239Zm-9.166 6.666c-.459 0-.851-.163-1.178-.49a1.602 1.602 0 0 1-.489-1.176V5c0-.458.163-.85.49-1.177.327-.327.719-.49 1.177-.49H5V1.667h1.667v1.666h6.666V1.667H15v1.666h.833c.459 0 .851.164 1.178.49.326.327.49.72.489 1.177v11.667c0 .458-.163.85-.49 1.177-.327.327-.719.49-1.177.49H4.167Zm0-1.666h11.666V8.333H4.167v8.334Z'
            />
          </svg>
        </span>
      </div>
    </div>
  )
}

export default DatePick
