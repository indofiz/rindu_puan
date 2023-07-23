import { useRecoilValue } from 'recoil'
import { statusPengajuan } from '../../../recoil/pengajuan'
import Lottie from 'lottie-react'
import success from '../../../assets/lottie/success_2.json'
import error from '../../../assets/lottie/error.json'
import loading from '../../../assets/lottie/loading_2.json'

const Selesai = () => {
  const statusPeng = useRecoilValue(statusPengajuan)

  const status = ['success', 'error', 'initial']

  const iconList = [success, error, loading]

  const index = status.indexOf(statusPeng)

  const iconRender = index != -1 ? iconList[index] : iconList[2]

  return (
    <div className='w-52 mx-auto mb-12 -mt-4'>
      {<Lottie animationData={iconRender} loop={true} />}
    </div>
  )
}

export default Selesai
