import { useEffect, useState } from 'react'
import { useRecoilState, useRecoilValue, useResetRecoilState } from 'recoil'
import PlusButton from '../PlusButton'
import Template from './Template'
import ModalForm from '../ModalForm'
import KorbanForm from './KorbanForm'
import ItemKorban from './ItemKorban'
import {
  Berkas,
  Korban as Krbn,
  dataFileKorban,
  dataFileSementara,
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

  const [listFile, setListFile] = useRecoilState(dataFileKorban)

  const [fileSementara, setFileSementara] = useRecoilState(dataFileSementara)

  const [dataSementara, setDataSementara] = useRecoilState(dataSementaraKorban)

  const resetDataFileSementara = useResetRecoilState(dataFileSementara)
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
    resetDataSementara()
    resetDataFileSementara()
    setModal(false)
  }

  const closeModalEdit = () => {
    resetDataSementara()
    resetDataFileSementara()
    setModalEdit(false)
  }

  const onRemove = (index: number) => {
    setDeleteIndex(index)
    setModalDelete(true)
  }

  const handleRemove = (index: number) => {
    if (deleteIndex !== null) {
      const newList = removeItemAtIndex(listDataKorban, index)
      const newFileList = removeItemAtIndex(listFile, index)
      setListDataKorban(newList)
      setListFile(newFileList)
    }
    setDeleteIndex(null)
  }

  const onEdit = (index: number) => {
    setEditIndex(index)
    setDataSementara(listDataKorban[index])
    setFileSementara(listFile[index])
    setModalEdit(true)
  }

  const onSave = (uid: string) => {
    setListDataKorban((oldDataKorban: Krbn[]) => [
      ...oldDataKorban,
      { ...dataSementara, uid: uid }
    ])

    if (Object.keys(fileSementara).length) {
      setListFile((prev: Berkas[]) => [...prev, fileSementara])
    } else {
      setListFile((prev: Berkas[]) => [...prev, {}])
    }

    resetDataFileSementara()
    resetDataSementara()
  }

  const onSaveEdit = () => {
    if (editIndex != null) {
      const newList = replaceItemAtIndex(
        listDataKorban,
        editIndex,
        dataSementara
      )

      const newFile: Berkas[] = replaceItemAtIndex(
        listFile,
        editIndex,
        fileSementara
      )

      setListDataKorban(newList)
      setListFile(newFile)
      resetDataFileSementara()
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
                key={index}
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
