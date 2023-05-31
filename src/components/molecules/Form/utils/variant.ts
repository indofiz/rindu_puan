import { cva } from 'class-variance-authority'

export const inputVariant = cva(
  'py-2 px-3 border w-full rounded-md focus:outline-none focus:ring-1 placeholder:text-gray-400 placeholder:text-sm',
  {
    variants: {
      state: {
        normal: [
          'bg-white',
          'text-black',
          'border-gray-300',
          'focus:border-primary',
          'focus:ring-primary'
        ],
        danger: [
          'bg-white',
          'text-black',
          'border-red-400',
          'focus:border-primary',
          'focus:ring-primary'
        ],
        success: [
          'bg-white',
          'text-black',
          'border-emerald-500',
          'focus:border-primary',
          'focus:ring-primary'
        ]
      },
      sizes: {
        small: ['py-[6px]', 'px-3'],
        medium: ['py-[9px]', 'px-3'],
        large: ['py-3', 'px-4', 'placeholder:text-base']
      }
    },
    defaultVariants: {
      state: 'normal',
      sizes: 'medium'
    }
  }
)

export const messageVariant = cva('text-xs', {
  variants: {
    state: {
      normal: ['text-gray-500'],
      danger: ['text-red-400'],
      success: ['text-emerald-400']
    }
  },
  defaultVariants: {
    state: 'normal'
  }
})

export const radioVariant = cva('border rounded-md', {
  variants: {
    state: {
      true: ['bg-primary/10', 'text-gray-800', 'border-primary'],
      false: ['bg-white', 'border-gray-300', 'text-gray-500']
    }
  },
  defaultVariants: {
    state: false
  }
})
