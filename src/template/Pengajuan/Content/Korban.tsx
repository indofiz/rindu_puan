import { useEffect, useState } from 'react'
import { useRecoilState, useRecoilValue, useResetRecoilState } from 'recoil'
import PlusButton from '../PlusButton'
import Template from './Template'
import ModalForm from '../ModalForm'
import KorbanForm from './KorbanForm'
import ItemKorban from './ItemKorban'
import {
  Korban as Krbn,
  dataKorban,
  dataSementaraKorban
} from '../../../recoil/pengajuan'
import NoPerson from './NoPerson'
import {
  removeItemAtIndex,
  replaceItemAtIndex
} from '../../../utils/arraySlice'
import ModalDelete from '../ModalDelete'
import { formKorbanSelector } from '../../../recoil/form'

const Korban = () => {
  const [modal, setModal] = useState(false)
  const [editIndex, setEditIndex] = useState<number | null>(null)
  const [deleteIndex, setDeleteIndex] = useState<number | null>(null)
  const [modalEdit, setModalEdit] = useState(false)
  const [modalDelete, setModalDelete] = useState(false)

  const [listDataKorban, setListDataKorban] = useRecoilState(dataKorban)

  const [dataSementara, setDataSementara] = useRecoilState(dataSementaraKorban)

  const resetDataSementara = useResetRecoilState(dataSementaraKorban)

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }, [])

  const onModalState = () => {
    setModal((prev) => !prev)
  }

  const closeModalDelete = () => {
    setDeleteIndex(null)
    setModalDelete(false)
  }
  const closeModal = () => {
    setModal(false)
  }
  const closeModalEdit = () => {
    resetDataSementara()
    setModalEdit(false)
  }

  const onRemove = (index: number) => {
    setDeleteIndex(index)
    setModalDelete(true)
  }

  const handleRemove = (index: number) => {
    if (deleteIndex !== null) {
      const newList = removeItemAtIndex(listDataKorban, index)
      setListDataKorban(newList)
    }
    setDeleteIndex(null)
  }

  const onEdit = (index: number) => {
    setEditIndex(index)
    setDataSementara(listDataKorban[index])
    setModalEdit(true)
  }

  const onSave = () => {
    setListDataKorban((oldDataKorban: Krbn[]) => [
      ...oldDataKorban,
      dataSementara
    ])
    resetDataSementara()
  }

  const onSaveEdit = () => {
    if (editIndex != null) {
      const newList = replaceItemAtIndex(
        listDataKorban,
        editIndex,
        dataSementara
      )
      setListDataKorban(newList)
      resetDataSementara()
    }
    setEditIndex(null)
  }

  const form = useRecoilValue(formKorbanSelector)

  return (
    <Template>
      <>
        <div className='flex flex-col gap-2 mb-6'>
          {listDataKorban.length > 0 ? (
            listDataKorban.map((item, index) => (
              <ItemKorban
                item={item}
                index={index}
                key={item.nik}
                onRemove={onRemove}
                onEdit={onEdit}
              />
            ))
          ) : (
            <NoPerson type='Korban' />
          )}
        </div>
        <PlusButton onClick={onModalState} label='Tambah Korban' />

        <ModalForm
          title='Edit Korban'
          isOpen={modalEdit}
          closeModal={closeModal}
          content={
            <KorbanForm
              onSave={onSaveEdit}
              closeModal={closeModalEdit}
              form={form}
            />
          }
        ></ModalForm>

        <ModalForm
          title='Tambah Korban'
          isOpen={modal}
          closeModal={closeModal}
          content={
            <KorbanForm onSave={onSave} closeModal={closeModal} form={form} />
          }
        ></ModalForm>

        {deleteIndex !== null ? (
          <ModalDelete
            index={deleteIndex}
            onDelete={handleRemove}
            isOpen={modalDelete}
            closeModal={closeModalDelete}
          />
        ) : null}
      </>
    </Template>
  )
}

export default Korban
