import React from 'react'
import Button from '../../components/atoms/Button'
import { Dialog } from '@headlessui/react'
import Lottie from 'lottie-react'
import loading from '../../assets/lottie/loading_2.json'
import error from '../../assets/lottie/error.json'

interface ILoadingModal {
  isOpen: boolean
  title: string
  closeModal: () => void
  isError: IError | null
}

export interface IError {
  errors: { [key: string]: string[] }
}

const LoadingModal: React.FC<ILoadingModal> = ({
  isOpen,
  closeModal,
  title,
  isError
}) => {
  return (
    <Dialog open={isOpen} onClose={closeModal} className='relative z-50'>
      {/* The backdrop, rendered as a fixed sibling to the panel container */}
      <div className='fixed inset-0 bg-black/30' aria-hidden='true' />

      {/* Full-screen container to center the panel */}
      <div className='fixed inset-0 flex items-center justify-center p-4'>
        {/* The actual dialog panel  */}
        <Dialog.Panel className='mx-auto w-full text-center max-w-sm rounded-xl py-5 px-3 bg-white shadow-lg'>
          <Dialog.Title className='flex flex-col gap-2 items-center justify-center'>
            <span className='text-xl font-semibold mt-2'>{title}</span>
          </Dialog.Title>

          <div>
            <Lottie
              style={{ height: isError ? 120 : 200 }}
              animationData={isError ? error : loading}
            />
          </div>
          {isError ? (
            <div className='text-red-400'>
              {isError &&
                Object.keys(isError.errors).map((item, index) => {
                  if (isError.errors[item].length) {
                    return (
                      <div key={index}>
                        {isError.errors[item].map((itm, number) => (
                          <li key={number}>{itm}</li>
                        ))}
                      </div>
                    )
                  }
                })}
            </div>
          ) : null}
          <div className='flex gap-2 mt-4'>
            {isError ? (
              <Button
                onClick={closeModal}
                label='Oke, Kembali'
                variant='secondary'
                className='flex-1'
              />
            ) : null}
          </div>
        </Dialog.Panel>
      </div>
    </Dialog>
  )
}

export default LoadingModal
