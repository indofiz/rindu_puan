import { Disclosure } from '@headlessui/react'
import { ChevronUpIcon } from 'lucide-react'
import React from 'react'
import { useRecoilValue } from 'recoil'
import { faqState } from '../recoil/api/apiFAQ'
import { cn } from '../utils/classMerge'
import no_data from '../assets/images/no-data.png'

const Footer = React.lazy(() => import('../template/Footer'))
const Header = React.lazy(() => import('../template/Pengajuan/Header'))

const Faq = () => {
  const faq = useRecoilValue(faqState)
  return (
    <div className='bg-cream'>
      <div className='bg-background mx-auto min-h-screen md:min-h-screen'>
        <Header />
        <div className='flex px-8 justify-between items-center mt-12'>
          <div className='flex flex-col justify-center items-center mx-auto'>
            <span className='tracking-[0.6rem] text-primary'>FAQ</span>
            <h3 className='text-center text-3xl font-semibold text-black'>
              FREQUENTLY ASKED QUESTIONS
            </h3>
          </div>
        </div>
        <div className='max-w-xl mx-auto mt-12'>
          <div className='w-full px-4'>
            {faq.length ? (
              <div className='mx-auto w-full rounded-2xl bg-white p-2'>
                {faq.map((item) => (
                  <Disclosure>
                    {({ open }) => (
                      <>
                        <Disclosure.Button className='flex flex-row w-full justify-between mb-2 rounded-lg bg-gray-100 px-4 py-2 text-left text-sm font-medium text-black hover:bg-primary/40 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75'>
                          <span>{item.pertanyaan}</span>
                          <span>
                            <ChevronUpIcon
                              className={cn(
                                'w-5',
                                open
                                  ? 'rotate-180 transform'
                                  : 'h-5 w-5 text-primary'
                              )}
                            />
                          </span>
                        </Disclosure.Button>
                        <Disclosure.Panel className='transition-all px-4 pt-4 pb-2 text-sm text-gray-500'>
                          {item.jawaban}
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                ))}
              </div>
            ) : null}
            {faq.length == 0 ? (
              <div className='max-w-md md:container md:mx-auto mt-6 mx-8 flex justify-center items-center flex-col'>
                <img src={no_data} className='w-96' alt='' />
                <h3 className='text-primary font-semibold text-xl mb-2'>
                  FAQ BELUM ADA
                </h3>
                <p className='max-w-md text-center text-gray-500'>
                  Mohon maaf belum ada faq yang ditampilkan, silahkan gunakan
                  menu lainnya.
                </p>
              </div>
            ) : null}
          </div>
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default Faq
