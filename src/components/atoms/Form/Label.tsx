import cx from 'classnames'

interface LabelProps {
  id: string | undefined
  label: string
  size?: 'small' | 'medium' | 'large' | string
}

const Label: React.FC<LabelProps> = ({ label, id, size = 'medium' }) => {
  const className = cx(
    { 'text-sm': size === 'small' },
    { 'text-base': size === 'medium' },
    { 'text-lg': size === 'large' },
    'mb-1',
    'font-medium',
    'text-label'
  )

  return (
    <label htmlFor={id} className={className}>
      {label}
    </label>
  )
}

export default Label
