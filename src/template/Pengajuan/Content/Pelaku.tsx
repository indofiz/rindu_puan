import { useEffect, useState } from 'react'
import PlusButton from '../PlusButton'
import Template from './Template'
import ModalForm from '../ModalForm'
import PelakuForm from './PelakuForm'
import { useRecoilState, useResetRecoilState } from 'recoil'
import {
  Berkas,
  Pelaku as Pelku,
  dataFilePelaku,
  dataFileSementara,
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

  const [listFile, setListFile] = useRecoilState(dataFilePelaku)

  const [fileSementara, setFileSementara] = useRecoilState(dataFileSementara)

  const resetDataFileSementara = useResetRecoilState(dataFileSementara)
  const resetDataSementara = useResetRecoilState(dataSementaraPelaku)

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
      const newList = removeItemAtIndex(listDataPelaku, index)
      const newFileList = removeItemAtIndex(listFile, index)
      setListDataPelaku(newList)
      setListFile(newFileList)
    }
    setDeleteIndex(null)
  }

  const onEdit = (index: number) => {
    setEditIndex(index)
    setDataSementara(listDataPelaku[index])
    setFileSementara(listFile[index])
    setModalEdit(true)
  }

  const onSave = (uid: string) => {
    setListDataPelaku((oldDataPelaku: Pelku[]) => [
      ...oldDataPelaku,
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
        listDataPelaku,
        editIndex,
        dataSementara
      )

      const newFile: Berkas[] = replaceItemAtIndex(
        listFile,
        editIndex,
        fileSementara
      )

      setListFile(newFile)
      setListDataPelaku(newList)
      resetDataFileSementara()
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
                key={index}
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
