import { useState } from 'react'
import PlusButton from '../PlusButton'
import Template from './Template'
import ModalForm from '../ModalForm'
import ItemKorban from './ItemKorban'
import PelakuForm from './PelakuForm'

const Pelaku = () => {
  const [modal, setModal] = useState(false)

  const onModalState = () => {
    setModal((prev) => !prev)
  }

  const closeModal = () => {
    setModal(false)
  }

  return (
    <Template>
      <>
        <div className='flex flex-col gap-2 mb-6'></div>
        <PlusButton onClick={onModalState} label='Tambah Pelaku' />
        <ModalForm
          title='Tambah Pelaku'
          isOpen={modal}
          closeModal={closeModal}
          content={<PelakuForm closeModal={closeModal} />}
        ></ModalForm>
      </>
    </Template>
  )
}

export default Pelaku
