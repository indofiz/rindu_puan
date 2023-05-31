import Lottie from 'lottie-react'
import noPerson from '../../../assets/lottie/no_person.json'

interface NoPerson {
  type: string
}
const NoPerson: React.FC<NoPerson> = ({ type }) => {
  return (
    <div className='w-80 mx-auto text-center -mt-10'>
      <Lottie animationData={noPerson} loop={true} />
      <h3 className='font-semibold text-xl mt-4 text-black'>
        Tidak Ada Data {type}
      </h3>
      <p className='py-2 text-gray-400 text-sm font-light'>
        Tidak ada data <span className='lowercase'>{type}</span> untuk saat ini,
        silahkan klik tambah untuk menambahkan data.
      </p>
    </div>
  )
}

export default NoPerson
