import { cn } from '../../../../utils/classMerge'
import { DataStepper } from '../interface'
import { cva } from 'class-variance-authority'

const numberStepperVariant = cva(
  'w-10 rounded-full font-semibold grid place-items-center aspect-square relative',
  {
    variants: {
      variant: {
        active:
          'bg-primary text-white after:absolute after:-top-[3px] after:-bottom-[3px] after:-left-[3px] after:-right-[3px] after:rounded-full after:border-primary after:border',
        noActive: 'bg-transparent border border-gray-400 text-gray-500',
        visited: 'bg-secondary text-white'
      },
      defaultVariants: {
        variant: 'noActive'
      }
    }
  }
)

const Checked = () => (
  <svg xmlns='http://www.w3.org/2000/svg' width={16} height={16} fill='none'>
    <path
      fill='#fff'
      d='m6 13.613-4.14-4.14 1.887-1.886L6 9.847l6.587-6.594 1.886 1.887L6 13.613Z'
    />
  </svg>
)

const Numbering: React.FC<DataStepper> = ({ className, data, current }) => {
  const KeysOfData = Object.keys({ ...data })

  // FIND INDEX CURRENT
  const indexCurrent = KeysOfData.indexOf(current)

  return (
    <ol className={cn('mt-8 mb-8 flex justify-center gap-3', className)}>
      {KeysOfData.map((list, index) => {
        let variants: 'active' | 'noActive' | 'visited' | null | undefined =
          list === current
            ? 'active'
            : index < indexCurrent
            ? 'visited'
            : 'noActive'

        // REMOVE LAST NUMBER
        if (index + 1 === KeysOfData.length) {
          return null
        }

        return (
          <li key={`list-${index}`} className='flex items-center gap-2'>
            <span className={cn(numberStepperVariant({ variant: variants }))}>
              {index < indexCurrent ? <Checked /> : index + 1}
            </span>
            {index + 2 !== KeysOfData.length && (
              <span className='h-1 w-4 bg-gray-200 rounded-full'></span>
            )}
          </li>
        )
      })}
    </ol>
  )
}

export default Numbering
