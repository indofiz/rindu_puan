import React from 'react'
import { cn } from '../../../utils/classMerge'

interface MessageProps {
  message?: string
  state?: 'normal' | 'danger' | 'success' | null
  className?: string
}

const Success = (
  <svg xmlns='http://www.w3.org/2000/svg' width={12} height={12} fill='none'>
    <path
      fill='#22C553'
      d='M4.5 10.21 1.395 7.105 2.81 5.69 4.5 7.385 9.44 2.44l1.415 1.415L4.5 10.21Z'
    />
  </svg>
)

const Warning = (
  <svg xmlns='http://www.w3.org/2000/svg' width={12} height={12} fill='none'>
    <path
      fill='#EF4444'
      d='M2.235 10.5h7.53A1 1 0 0 0 10.63 9L6.865 2.495a1 1 0 0 0-1.73 0L1.37 9a1 1 0 0 0 .865 1.5ZM6 7a.501.501 0 0 1-.5-.5v-1c0-.275.225-.5.5-.5s.5.225.5.5v1c0 .275-.225.5-.5.5Zm.5 2h-1V8h1v1Z'
    />
  </svg>
)

const Message: React.FC<MessageProps> = (props) => {
  // PROPS DESTRUCT
  const { message, className, state } = props

  const icon = state === 'danger' ? Warning : state === 'success' ? Success : ''
  const textColor =
    state === 'danger'
      ? 'text-red-400'
      : state === 'success'
      ? 'text-emerald-400'
      : 'text-gray-500'

  return (
    <div
      className={cn(
        className,
        'text-xs',
        'flex items-center',
        'gap-1',
        textColor
      )}
    >
      {state && icon}
      {message}
    </div>
  )
}

export default Message
