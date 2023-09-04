import { VariantProps } from 'class-variance-authority'
import { Trash2 } from 'lucide-react'
import { FC } from 'react'
import { cn } from '../../../utils/classMerge'
import Input, { InputProps } from '../../atoms/Form/Input'
import Label from '../../atoms/Form/Label'
import Message from '../../atoms/Form/Message'
import { dataChange } from '../../organism/Form/utils/param'
import { inputVariant } from './utils/variant'

interface FileInputProps extends InputProps, VariantProps<typeof inputVariant> {
  label: string
  caption?: string
  errorMessage?: any
  file?: File
  onDelete?: (id: string) => void
}

const InputImage: FC<FileInputProps> = ({
  id = '',
  label,
  className,
  state = 'normal',
  sizes,
  caption,
  errorMessage,
  file,
  onDelete,
  ...props
}) => {
  const handleChange = (param: dataChange) => {
    // CHECK FORMAT IMAGE
    const val = param.target.value
    let msg: any[] = []
    if (val) {
      const size = val instanceof File ? val.size : null
      const type = val instanceof File ? val.type : null
      const name = val instanceof File ? val.name : null

      const allowedTypes = ['image/jpeg', 'image/png', 'image/jpg']
      const allowedExt = ['jpg', 'png', 'jpeg']

      const isOverMax = Boolean(size && size > 9 * 1000 * 1024)
      const isTypeTrue = Boolean(type && allowedTypes.includes(type))
      const isNameHasExt = Boolean(name && name?.split('.').length)
      const isExtentionTrue = Boolean(
        isNameHasExt &&
          name &&
          allowedExt.includes(name?.split('.').slice(-1)[0])
      )

      if (isOverMax) {
        msg = [{ id: '1', message: 'File Tidak boleh lebih dari 9MB' }]
      }
      if (!isTypeTrue || !isExtentionTrue) {
        msg = [{ id: '2', message: 'Hanya JPEG,PNG,JPG yang diperbolehkan' }]
      }
      if (isTypeTrue && !isOverMax && isExtentionTrue) {
        msg = []
        props.onChange(param)
      }

      props.handleError?.({ target: { name: id, value: msg } })
    }
  }

  const handleDelete = () => {
    if (onDelete) onDelete(id)
  }
  const text_inp = Boolean(file) ? 'Maksimal_1_File' : 'Ambil_Gambar'

  const afterClass = `before:content-['${text_inp}'] before:text-gray-500 before:absolute before:left-[94px] before:text-sm before:mt-[2px]`

  const classInputFile =
    'flex w-full relative text-sm text-transparent border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400'

  return (
    <div className='flex flex-col'>
      <Label id={id} label={label} required={props?.required ? true : false} />

      <Input
        {...props}
        id={id}
        type='file'
        disabled={Boolean(file)}
        accept='image/png,image/jpg,image/jpeg'
        value={props.value}
        onChange={handleChange}
        className={cn(
          inputVariant({ state, sizes }),
          className,
          classInputFile,
          afterClass
        )}
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
              <Message key={mes.id} state={'danger'} message={mes.message} />
            )
          )}
      </div>
      <div className='mt-4'>
        {Boolean(file) && (
          <div className='relative w-44 overflow-clip'>
            <img
              src={file && URL.createObjectURL(file)}
              alt=''
              className='w-full h-full object-cover border border-gray-200 rounded-lg bg-gray-100/40 p-1'
            />
            <button
              onClick={handleDelete}
              className='bg-primary/80 flex justify-center items-center text-sm gap-1 text-white py-2 absolute bottom-1 left-1 right-1 rounded hover:bg-black/70 transition-all'
            >
              <Trash2 size={16} /> Hapus
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default InputImage
