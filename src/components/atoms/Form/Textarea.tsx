import { ChangeEvent, FC, InputHTMLAttributes, useRef } from 'react'
import { cn } from '../../../utils/classMerge'
import { dataChange, dataError } from '../../organism/Form/utils/param'
import useAutosizeTextArea from './hooks/useAutoResizeTextArea'

export interface TextareaProps extends InputHTMLAttributes<HTMLInputElement> {
  onChange: (param: dataChange) => void
  handleError?: (param: dataError) => void
  message?: []
}

const Textarea: FC<TextareaProps> = (props) => {
  let { className = '', ...rest } = props
  const textAreaRef = useRef<HTMLTextAreaElement>(null)
  useAutosizeTextArea(textAreaRef.current, props.value!)
  // HANDLE CHANGE
  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const data = { target: { name: e.target.id, value: e.target.value } }
    props.onChange(data)
  }

  return (
    <div className='relative w-full'>
      <textarea
        className={cn(className, 'scrollbar-none')}
        id={props.id}
        rows={1}
        style={{ height: 40 }}
        placeholder={props.placeholder}
        ref={textAreaRef}
        value={props.value}
        onChange={handleChange}
      />
    </div>
  )
}

export default Textarea
