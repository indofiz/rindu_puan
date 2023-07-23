import { useState } from 'react'
import PlusButton from '../PlusButton'
import Template from './Template'
import ModalForm from '../ModalForm'
import PelakuForm from './PelakuForm'
import { useRecoilState, useResetRecoilState } from 'recoil'
import {
  Pelaku as Pelku,
  dataPelaku,
  dataSementaraPelaku
} from '../../../recoil/pengajuan'
import {
  removeItemAtIndex,
  replaceItemAtIndex
} from '../../../utils/arraySlice'
import ItemPelaku from './ItemPelaku'
import NoPerson from './NoPerson'
import ModalDelete from '../ModalDelete'

const Pelaku = () => {
  const [modal, setModal] = useState(false)
  const [editIndex, setEditIndex] = useState<number | null>(null)
  const [deleteIndex, setDeleteIndex] = useState<number | null>(null)
  const [modalEdit, setModalEdit] = useState(false)
  const [modalDelete, setModalDelete] = useState(false)

  const [listDataPelaku, setListDataPelaku] = useRecoilState(dataPelaku)

  const [dataSementara, setDataSementara] = useRecoilState(dataSementaraPelaku)

  const resetDataSementara = useResetRecoilState(dataSementaraPelaku)

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
      const newList = removeItemAtIndex(listDataPelaku, index)
      setListDataPelaku(newList)
    }
    setDeleteIndex(null)
  }

  const onEdit = (index: number) => {
    setEditIndex(index)
    setDataSementara(listDataPelaku[index])
    setModalEdit(true)
  }

  const onSave = () => {
    setListDataPelaku((oldDataKorban: Pelku[]) => [
      ...oldDataKorban,
      dataSementara
    ])
    resetDataSementara()
  }

  const onSaveEdit = () => {
    if (editIndex != null) {
      const newList = replaceItemAtIndex(
        listDataPelaku,
        editIndex,
        dataSementara
      )
      setListDataPelaku(newList)
      resetDataSementara()
    }
    setEditIndex(null)
  }

  return (
    <Template>
      <>
        <div className='flex flex-col gap-2 mb-6'>
          {listDataPelaku.length > 0 ? (
            listDataPelaku.map((item, index) => (
              <ItemPelaku
                item={item}
                index={index}
                key={item.nik}
                onRemove={onRemove}
                onEdit={onEdit}
              />
            ))
          ) : (
            <NoPerson type='Pelaku' />
          )}
        </div>
        <PlusButton onClick={onModalState} label='Tambah Pelaku' />

        <ModalForm
          title='Edit Pelaku'
          isOpen={modalEdit}
          closeModal={closeModal}
          content={
            <PelakuForm onSave={onSaveEdit} closeModal={closeModalEdit} />
          }
        ></ModalForm>

        <ModalForm
          title='Tambah Pelaku'
          isOpen={modal}
          closeModal={closeModal}
          content={<PelakuForm onSave={onSave} closeModal={closeModal} />}
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

export default Pelaku
