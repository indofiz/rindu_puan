import { Dialog } from '@headlessui/react'
import BackButton from './BackButton'
import { ArrowLeft } from 'lucide-react'

interface ModalForm {
  isOpen: boolean
  closeModal: () => void
  content: JSX.Element
  title: string
}

const ModalForm: React.FC<ModalForm> = ({
  isOpen,
  closeModal,
  content,
  title
}) => {
  return (
    <Dialog open={isOpen} onClose={closeModal} className='relative z-50'>
      <div className='fixed inset-0 bg-black/30' aria-hidden='true'></div>
      <div className='fixed inset-0 overflow-y-auto'>
        <div className='flex min-h-full justify-center'>
          <Dialog.Panel className='bg-white self-stretch md:self-center max-w-lg md:my-16 flex-1 w-full p-4'>
            <Dialog.Title className='flex mt-3 relative items-center'>
              <span className='absolute left-0'>
                <BackButton
                  label='Back'
                  icon={<ArrowLeft size={18} />}
                  onClick={closeModal}
                />
              </span>
              <span className='flex-1 text-center text-xl font-medium'>
                {title}
              </span>
            </Dialog.Title>
            <>{content}</>
          </Dialog.Panel>
        </div>
      </div>
    </Dialog>
  )
}

export default ModalForm
