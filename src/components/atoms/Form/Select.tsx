import { useEffect, useState } from 'react'
import { cn } from '../../../utils/classMerge'

export type SelectOption = {
  label: string
  value: any
}

type MultipleSelectProps = {
  multiple: true
  value: SelectOption[]
  onChange: (value: SelectOption[]) => void
}

type SingleSelectProps = {
  multiple?: false
  value?: SelectOption
  onChange: (value: SelectOption | undefined) => void
}

type SelectProps = {
  options: SelectOption[]
} & (SingleSelectProps | MultipleSelectProps)

const Select = ({ multiple, value, onChange, options }: SelectProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [isHiglighted, setIsHiglighted] = useState<number>(0)

  useEffect(() => {
    if (isOpen) setIsHiglighted(0)
  }, [isOpen])

  const arrow = (
    <svg xmlns='http://www.w3.org/2000/svg' width={24} height={24} fill='none'>
      <path
        fill='#414D46'
        d='M7.41 8.58 12 13.17l4.59-4.59L18 10l-6 6-6-6 1.41-1.42Z'
      />
    </svg>
  )

  const clearOptions = () => (multiple ? onChange([]) : onChange(undefined))

  const selectOption = (option: SelectOption) => {
    if (multiple) {
      if (value.includes(option)) {
        onChange(value.filter((o) => o !== option))
      } else {
        onChange([...value, option])
      }
    } else {
      option.value !== value?.value && onChange(option)
    }
  }

  const isOptionSelected = (option: SelectOption) => {
    return multiple ? value.includes(option) : option.value === value?.value
  }

  const PlaceholderText = () => (
    <span className='text-gray-400 text-sm'>Placeholder</span>
  )

  return (
    <div
      onClick={() => setIsOpen((prev) => !prev)}
      onBlur={() => setIsOpen(false)}
      tabIndex={10}
      className='flex cursor-pointer flex-grow relative border min-h-[40px] pl-3 pr-2 py-1 items-center justify-between gap-2 outline-none border-gray-300 rounded-md focus:border-primary'
    >
      <span className='flex gap-1 flex-wrap'>
        {multiple ? (
          value.length ? (
            value.map((v) => (
              <button
                key={v.value}
                onClick={(e) => {
                  e.stopPropagation()
                  selectOption(v)
                }}
                className='flex flex-wrap items-center text-sm gap-1 border border-gray-200 hover:bg-gray-300 px-2 rounded'
              >
                {v.label}
                <span>&times;</span>
              </button>
            ))
          ) : (
            <PlaceholderText />
          )
        ) : value ? (
          value.label
        ) : (
          <PlaceholderText />
        )}
      </span>
      <div className='flex gap-2 items-center self-stretch'>
        <button
          onClick={(e) => {
            e.stopPropagation()
            clearOptions()
          }}
          className='text-2xl'
        >
          &times;
        </button>
        <div className='self-stretch bg-gray-400 w-[1px] my-1'></div>
        <div className={`${isOpen ? 'rotate-180' : 'rotate-0'} transition-all`}>
          {arrow}
        </div>
      </div>
      <ul
        className={cn(
          'absolute top-[calc(100%_+_0.4em)] z-50 left-0 right-0 shadow-md bg-white max-h-60 overflow-y-auto p-0 border border-gray-300 rounded-md w-full',
          isOpen ? 'flex flex-col' : 'hidden'
        )}
      >
        {options.map((option, index) => (
          <li
            onClick={(e) => {
              e.stopPropagation()
              selectOption(option)
              setIsOpen(false)
            }}
            onMouseEnter={() => setIsHiglighted(index)}
            className={cn(
              'py-2 px-3 cursor-pointer',
              isOptionSelected(option) ? 'bg-primary/80 text-white' : '',
              index == isHiglighted ? 'bg-primary/30 text-text' : ''
            )}
            key={option.label}
          >
            {option.label}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Select
