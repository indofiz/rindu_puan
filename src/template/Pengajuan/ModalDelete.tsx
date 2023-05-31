import { Dialog } from '@headlessui/react'
import Button from '../../components/atoms/Button'

interface ModalForm {
  isOpen: boolean
  closeModal: () => void
  onDelete: (index: number) => void
  index: number
}

const ModalDelete: React.FC<ModalForm> = ({
  isOpen,
  closeModal,
  index,
  onDelete
}) => {
  const icon_trash = (
    <svg xmlns='http://www.w3.org/2000/svg' width={40} height={40} fill='none'>
      <path
        fill='#F9517A'
        d='M7.45 35h25.1c2.567 0 4.167-2.783 2.884-5L22.884 8.317C21.6 6.1 18.4 6.1 17.117 8.317L4.567 30c-1.284 2.217.316 5 2.883 5ZM20 23.333c-.916 0-1.666-.75-1.666-1.666v-3.334c0-.916.75-1.666 1.666-1.666.917 0 1.667.75 1.667 1.666v3.334c0 .916-.75 1.666-1.667 1.666ZM21.667 30h-3.334v-3.333h3.334V30Z'
      />
    </svg>
  )

  return (
    <Dialog open={isOpen} onClose={closeModal} className='relative z-50'>
      {/* The backdrop, rendered as a fixed sibling to the panel container */}
      <div className='fixed inset-0 bg-black/30' aria-hidden='true' />

      {/* Full-screen container to center the panel */}
      <div className='fixed inset-0 flex items-center justify-center p-4'>
        {/* The actual dialog panel  */}
        <Dialog.Panel className='mx-auto w-full text-center max-w-sm rounded-xl py-5 px-3 bg-white shadow-lg'>
          <Dialog.Title className='flex flex-col gap-2 items-center justify-center'>
            <span className='w-16 aspect-square rounded-full pb-1 bg-primary/20 grid place-items-center'>
              {icon_trash}
            </span>
            <span className='text-xl font-semibold mt-2'>
              Yakin menghapus Data?
            </span>
          </Dialog.Title>
          <Dialog.Description className='mt-2 mx-2 font-light text-gray-400'>
            Data yang dihapus tidak bisa dikembalikan.
          </Dialog.Description>
          <div className='flex gap-2 mt-4'>
            <Button
              onClick={closeModal}
              label='Batalkan'
              variant='secondary'
              className='flex-1'
            />
            <Button
              onClick={() => onDelete(index)}
              label='Ya, Hapus!'
              variant='primary'
              className='flex-1'
            />
          </div>
        </Dialog.Panel>
      </div>
    </Dialog>
  )
}

export default ModalDelete
