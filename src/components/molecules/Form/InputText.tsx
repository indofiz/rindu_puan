import { FC } from 'react'
import Input, { InputProps } from '../../atoms/Form/Input'
import Label from '../../atoms/Form/Label'
import { VariantProps } from 'class-variance-authority'
import { cn } from '../../../utils/classMerge'
import Message from '../../atoms/Form/Message'
import { inputVariant } from './utils/variant'

interface TextInputProps extends InputProps, VariantProps<typeof inputVariant> {
  label: string
  caption?: string
  errorMessage?: any
}

const InputText: FC<TextInputProps> = (props) => {
  const {
    id = '',
    label,
    className,
    state = 'normal',
    sizes,
    caption,
    errorMessage
  } = props

  return (
    <div className='flex flex-col'>
      <Label id={id} label={label} />

      <Input
        {...props}
        className={cn(inputVariant({ state, sizes }), className)}
      />
      <div
        className={cn(
          'flex flex-col gap-[2px] w-full',
          caption || errorMessage?.length > 0 ? ' mt-[5px]' : ''
        )}
      >
        {caption && (
          <Message message={caption} className='text-xs text-gray-500' />
        )}

        {errorMessage &&
          errorMessage.map(
            (mes: { id: string; message: string; state: any }) => (
              <Message key={mes.id} state={mes.state} message={mes.message} />
            )
          )}
      </div>
    </div>
  )
}

export default InputText
