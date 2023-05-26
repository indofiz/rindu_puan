import { FC } from 'react'
import InputCondition from './InputCondition'
import formMetaData from './utils/formMetaData'

const Form: FC = () => {
  const { handleChange, handleError, data, dataForm, dataError } =
    formMetaData()
  return (
    <div className='w-full flex flex-col gap-3'>
      {dataForm.map((item: any, index: number) => (
        <InputCondition
          tabIndex={index}
          key={item.id}
          item={item}
          onChange={handleChange}
          handleError={handleError}
          errorMessage={dataError[item.id]}
          data={data[item.id]}
        />
      ))}
    </div>
  )
}

export default Form
