import Button from '../../components/atoms/Button'
import Korban from './Content/Korban'
import Laporan from './Content/Laporan'
import Pelaku from './Content/Pelaku'
import Stepper from './Stepper'
import Controller from './Stepper/Controller'
import MainContent from './Stepper/MainContent'
import Meta from './Stepper/Meta'
import Numbering from './Stepper/Numbering'
import {
  dataErrorField,
  dataKorban,
  dataLaporan,
  dataPelaku,
  dataSementaraKorban,
  dataSementaraPelaku,
  isKorban,
  isLaporan,
  isPelaku,
  semuaDataLaporan,
  statusPengajuan
} from '../../recoil/pengajuan'
import { useRecoilState, useRecoilValue, useResetRecoilState } from 'recoil'
import { postPengajuanApiUrl } from '../../recoil/api/baseUrl'
import axios from 'axios'
import { useState } from 'react'
import Selesai from './Content/Selesai'
import { useNavigate } from 'react-router-dom'
import { jsonToFormData } from '../../utils/convertObjectToFormData'
import LoadingModal, { IError } from './LoadingModal'

const StepperPengajuan = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState<IError | null>(null)

  const isLaporanTrue = useRecoilValue(isLaporan)

  const [statusPeng, setStatusPengajuan] = useRecoilState(statusPengajuan)

  const status = ['success', 'error', 'initial']

  const navigate = useNavigate()

  const textStatus = ['Berhasil', 'Ups, Error!', 'Loading']
  const descStatus = [
    'Selamat data anda berhasil diajukan silahkan tunggu, data akan segera kami proses',
    'Terjadi Kesalahan dalam pengajuan data, silahkan cek kembali data anda',
    'Tunggu data sedang diajukan, mungkin memerlukan beberapa waktu.'
  ]

  const index = status.indexOf(statusPeng)

  const textRender = index != -1 ? textStatus[index] : textStatus[2]
  const descRender = index != -1 ? descStatus[index] : descStatus[2]

  const isKorbanTrue = useRecoilValue(isKorban)
  const isPelakuTrue = useRecoilValue(isPelaku)

  const semuaData = useRecoilValue(semuaDataLaporan)

  // RESET
  const resetStatus = useResetRecoilState(statusPengajuan)
  const resetDataLaporan = useResetRecoilState(dataLaporan)
  const resetKorban = useResetRecoilState(dataKorban)
  const resetPelaku = useResetRecoilState(dataPelaku)
  const resetPelakuTemp = useResetRecoilState(dataSementaraKorban)
  const resetKorbanTemp = useResetRecoilState(dataSementaraPelaku)
  const resetError = useResetRecoilState(dataErrorField)

  const handleDone = () => {
    resetStatus()
    resetDataLaporan()
    resetKorban()
    resetPelaku()
    resetPelakuTemp()
    resetKorbanTemp()
    resetError()
    navigate('/')
  }

  const handleSave = async (nextPage: () => void) => {
    const articleApiUrl = postPengajuanApiUrl()
    setIsLoading(true)
    setIsError(null)
    try {
      const response = await axios.post<any>(
        articleApiUrl,
        jsonToFormData(semuaData)
      )
      if (response.status == 201) {
        setStatusPengajuan('success')
        setIsLoading(false)
        nextPage()
      }
    } catch (error: any) {
      setStatusPengajuan('error')
      if (error.response.status == 422) {
        setIsError(error.response.data)
      } else {
        setIsError(null)
        setIsLoading(false)
      }
      throw error.message
    }
  }

  const steps = {
    laporan: {
      title: 'Laporan',
      description:
        'Isi formulir berikut ini dengan data yang valid, guna mempermudah petugas dalam melakukan perlindungan.',
      content: <Laporan />
    },
    korban: {
      title: 'Data Korban',
      description:
        'Isi formulir berikut ini dengan data yang valid, guna mempermudah petugas dalam melakukan perlindungan.',
      content: <Korban />
    },
    pelaku: {
      title: 'Data Pelaku',
      description:
        'Isi formulir berikut ini dengan data yang valid, guna mempermudah petugas dalam melakukan perlindungan.',
      content: <Pelaku />
    },
    done: {
      title: textRender,
      description: descRender,
      content: <Selesai />
    }
  }

  return (
    <div className='mx-auto md:container md:max-w-lg md:mt-24'>
      <LoadingModal
        title={isError ? 'Terdapat Error' : 'Sedang Mengupload...'}
        isOpen={isLoading}
        isError={isError}
        closeModal={() => setIsLoading(false)}
      />
      <Stepper steps={steps} initialStep='laporan'>
        {(prevStep, nextStep, CurrentStep, steps) => (
          <>
            <Numbering data={steps} current={CurrentStep} />
            <Meta data={steps} current={CurrentStep} />
            <MainContent data={steps} current={CurrentStep} />

            {/* CONTOLLER 1 */}
            <Controller
              currentStep={CurrentStep}
              compareStep='laporan'
              isVisible={true}
            >
              <>
                <Button
                  disabled={!isLaporanTrue}
                  className='w-full'
                  onClick={isLaporanTrue ? nextStep : undefined}
                  // onClick={nextStep}
                  label='Selanjutnya'
                />
                <Button
                  variant='secondary'
                  className='w-full'
                  to='/'
                  label='Kembali'
                  isLink={true}
                />
              </>
            </Controller>

            {/* CONTOLLER 2 */}
            <Controller
              currentStep={CurrentStep}
              compareStep='korban'
              isVisible={true}
            >
              <>
                <Button
                  disabled={!isKorbanTrue}
                  className='w-full'
                  onClick={isKorbanTrue ? nextStep : undefined}
                  // onClick={nextStep}
                  label='Selanjutnya'
                />
                <Button
                  variant='secondary'
                  className='w-full'
                  onClick={() => {
                    prevStep()
                    setStatusPengajuan('initial')
                  }}
                  label='Kembali'
                />
              </>
            </Controller>

            {/* CONTOLLER 3 */}
            <Controller
              currentStep={CurrentStep}
              compareStep='pelaku'
              isVisible={true}
            >
              <>
                <Button
                  disabled={!isPelakuTrue || isLoading}
                  className='w-full'
                  onClick={
                    // () => nextStep()
                    isPelakuTrue
                      ? () => {
                          handleSave(nextStep)
                        }
                      : undefined
                  }
                  label={isLoading ? 'Loading ...' : 'Selanjutnya'}
                />
                <Button
                  variant='secondary'
                  className='w-full'
                  onClick={() => {
                    prevStep()
                    setStatusPengajuan('initial')
                  }}
                  label='Kembali'
                />
              </>
            </Controller>

            {/* CONTOLLER 4 */}
            <Controller
              currentStep={CurrentStep}
              compareStep='done'
              isVisible={true}
            >
              <>
                {statusPeng == 'success' ? (
                  <Button
                    className='w-full'
                    onClick={handleDone}
                    label='Selesai'
                  />
                ) : null}
                {statusPeng != 'success' ? (
                  <Button
                    variant='secondary'
                    className='w-full'
                    onClick={() => {
                      prevStep()
                      setStatusPengajuan('initial')
                    }}
                    label='Kembali'
                  />
                ) : null}
              </>
            </Controller>
          </>
        )}
      </Stepper>
    </div>
  )
}

export default StepperPengajuan
