import { ButtonHTMLAttributes } from 'react'
import { cn } from '../../utils/classMerge'
import { VariantProps, cva } from 'class-variance-authority'
import { Link } from 'react-router-dom'

const buttonVariant = cva(
  'rounded text-base font-semibold px-5 py-3 text-center',
  {
    variants: {
      variant: {
        primary: 'bg-primary text-white',
        secondary: 'bg-white text-back border border-gray-300',
        noBorder: 'bg-white text-black'
      }
    },
    defaultVariants: { variant: 'primary' }
  }
)

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariant> {
  label: string
  isLink?: boolean
  to?: any
}

const Button: React.FC<ButtonProps> = (props) => {
  const { label, onClick, variant, isLink = false } = props
  return !isLink ? (
    <button
      onClick={onClick}
      className={cn(buttonVariant({ variant }), props.className)}
    >
      {label}
    </button>
  ) : (
    <Link
      to={props.to}
      relative='path'
      className={cn(buttonVariant({ variant }), props.className)}
    >
      {label}
    </Link>
  )
}

export default Button
