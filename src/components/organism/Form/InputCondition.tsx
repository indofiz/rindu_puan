import { FC } from 'react'
import { dataChange, dataError } from './utils/param'
import InputText from '../../molecules/Form/InputText'
import InputEmail from '../../molecules/Form/InputEmail'
import InputTextarea from '../../molecules/Form/InputTextarea'
import InputDate from '../../molecules/Form/InputDate'
import InputNumber from '../../molecules/Form/InputNumber'
import RadioGroup from '../../molecules/Form/RadioGroup'

interface ConditionProps {
  item: {
    id: string
    type: string
    label: string
    placeholder?: string
    message?: []
    list_radio?: {}[]
    withPortal?: boolean
  }
  tabIndex: number
  data: string
  onChange: (param: dataChange) => void
  handleError?: (param: dataError) => void
  errorMessage?: {}[]
}

const InputCondition: FC<ConditionProps> = (props) => {
  const { item, data, onChange, handleError, tabIndex, errorMessage } = props
  //https://dev.to/devsmitra/react-best-practices-and-patterns-to-reduce-code-part-2-54f3
  // console.log(item)
  // TEXT
  if (item.type === 'text') {
    return (
      <InputText
        {...item}
        tabIndex={tabIndex}
        onChange={onChange}
        value={data}
        handleError={handleError}
        errorMessage={errorMessage}
      />
    )
  }

  // EMAIL
  if (item.type === 'email') {
    return (
      <InputEmail
        {...item}
        tabIndex={tabIndex}
        onChange={onChange}
        handleError={handleError}
        errorMessage={errorMessage}
        value={data}
      />
    )
  }

  // TEXTAREA
  if (item.type === 'textarea') {
    return (
      <InputTextarea
        {...item}
        tabIndex={tabIndex}
        onChange={onChange}
        errorMessage={errorMessage}
        value={data}
      />
    )
  }

  // DATE
  if (item.type === 'date') {
    return (
      <InputDate
        {...item}
        onChange={onChange}
        errorMessage={errorMessage}
        value={data}
      />
    )
  }

  // NUMBER
  if (item.type === 'number') {
    return (
      <InputNumber
        {...item}
        tabIndex={tabIndex}
        onChange={onChange}
        handleError={handleError}
        value={data}
      />
    )
  }

  // RADIO GROUP
  if (item.type === 'radio_group') {
    return (
      <RadioGroup
        {...item}
        errorMessage={errorMessage}
        onChange={onChange}
        value={data}
      />
    )
  }

  // NULL
  return null
}

export default InputCondition
