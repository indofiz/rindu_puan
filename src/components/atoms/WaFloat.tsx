import { useRecoilValue } from 'recoil'
import { konfigState } from '../../recoil/api/apiKonfigursi'
import { phoneNumber } from '../../utils/phoneNumber'

const WaFloat = () => {
  const konfigurasi = useRecoilValue(konfigState)
  const phone = phoneNumber(konfigurasi.nomor_kontak)

  return (
    <a
      href={'https://wa.me/' + phone}
      target='_blank'
      rel='noopener noreferrer'
      className='hidden md:flex bg-secondary border-4 border-white shadow-lg animate-bounce md:items-center md:justify-center h-24 aspect-square fixed bottom-10 right-5 rounded-full'
    >
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width={50}
        height={50}
        fill='none'
      >
        <g fill='#fff' clipPath='url(#a)'>
          <path d='M36.997 28.73c-.097-.046-3.742-1.841-4.39-2.074-.264-.095-.548-.188-.849-.188-.492 0-.906.245-1.228.727-.364.542-1.466 1.83-1.807 2.215-.044.05-.105.111-.141.111-.033 0-.597-.232-.768-.306-3.91-1.698-6.878-5.783-7.285-6.472-.058-.099-.06-.144-.061-.144.014-.052.146-.184.214-.252.198-.197.413-.456.621-.706l.294-.35c.302-.35.437-.624.593-.94l.081-.164c.38-.756.056-1.394-.05-1.6-.085-.172-1.624-3.887-1.788-4.277-.394-.942-.913-1.38-1.636-1.38-.067 0 0 0-.281.012-.343.014-2.207.26-3.031.78-.875.55-2.353 2.307-2.353 5.397 0 2.78 1.764 5.406 2.522 6.405l.103.15c2.902 4.237 6.519 7.377 10.185 8.842 3.53 1.41 5.202 1.573 6.152 1.573.4 0 .72-.032 1.002-.06l.179-.016c1.219-.109 3.899-1.497 4.508-3.191.48-1.334.607-2.792.288-3.321-.22-.36-.596-.541-1.074-.77Z' />
          <path d='M25.444 0C11.902 0 .885 10.934.885 24.374c0 4.347 1.164 8.602 3.367 12.326L.034 49.142a.65.65 0 0 0 .812.827l12.974-4.122a24.725 24.725 0 0 0 11.624 2.898C38.984 48.745 50 37.812 50 24.374 50 10.934 38.984 0 25.444 0Zm0 43.668a19.456 19.456 0 0 1-10.704-3.191.649.649 0 0 0-.553-.076l-6.5 2.066 2.099-6.19a.65.65 0 0 0-.091-.592A19.032 19.032 0 0 1 5.99 24.374c0-10.64 8.727-19.297 19.453-19.297 10.724 0 19.45 8.657 19.45 19.297 0 10.639-8.725 19.294-19.45 19.294Z' />
        </g>
        <defs>
          <clipPath id='a'>
            <path fill='#fff' d='M0 0h50v50H0z' />
          </clipPath>
        </defs>
      </svg>
    </a>
  )
}

export default WaFloat
