import { FC } from 'react'
import InputCondition from '../../../components/organism/Form/InputCondition'
import formPelaku from '../Data/FormPelaku.json'
import metaDataPelaku from '../Data/MetaDataPelaku'
import Button from '../../../components/atoms/Button'
import { requiredCheck } from '../../../utils/requiredheck'
import { nanoid } from 'nanoid/non-secure'
import metaDataFile from '../Data/MetaDataFile'

interface PelakuFormProps {
  closeModal: () => void
  onSave: (uid: string) => void
}
const PelakuForm: FC<PelakuFormProps> = ({ closeModal, onSave }) => {
  const { data, dataError, handleChange, handleError } = metaDataPelaku()

  const { handleChangeFile, handleDeleteFile, file } = metaDataFile()

  const isRequired = requiredCheck(data, formPelaku)

  const handleSave = () => {
    onSave(nanoid())
    closeModal()
  }

  const onDeleteFileTemporary = (id: string) => {
    handleDeleteFile(id)
  }

  return (
    <div className='w-full flex flex-col gap-3 mt-8'>
      {formPelaku.map((item: any, index: number) => (
        <InputCondition
          tabIndex={index + 1}
          key={item.id}
          item={item}
          onChange={item.type == 'file_image' ? handleChangeFile : handleChange}
          handleError={handleError}
          errorMessage={dataError[item.id]}
          data={item.type == 'file_image' ? '' : data[item.id]}
          file={item.type == 'file_image' && file[item.id]}
          onDeleteFile={onDeleteFileTemporary}
        />
      ))}
      <div className='flex w-full items-center justify-center gap-2 mt-8'>
        <Button
          disabled={!isRequired}
          label='Simpan'
          className='flex-1'
          variant='primary'
          onClick={handleSave}
        />
        <Button
          label='Batal'
          className='flex-1'
          variant='secondary'
          onClick={closeModal}
        />
      </div>
    </div>
  )
}

export default PelakuForm
