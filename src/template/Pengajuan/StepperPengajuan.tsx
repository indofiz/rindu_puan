import Button from '../../components/atoms/Button'
import Laporan from './Content/Laporan'
import Stepper from './Stepper'
import Controller from './Stepper/Controller'
import MainContent from './Stepper/MainContent'
import Meta from './Stepper/Meta'
import Numbering from './Stepper/Numbering'

const StepperPengajuan = () => {
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
      content: <>a</>
    },
    pelaku: {
      title: 'Data Pelaku',
      description:
        'Isi formulir berikut ini dengan data yang valid, guna mempermudah petugas dalam melakukan perlindungan.',
      content: <>a</>
    },
    done: {
      title: 'Selesai',
      description:
        'Isi formulir berikut ini dengan data yang valid, guna mempermudah petugas dalam melakukan perlindungan.',
      content: <>a</>
    }
  }

  return (
    <>
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
                  className='w-full'
                  onClick={nextStep}
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
                  className='w-full'
                  onClick={nextStep}
                  label='Selanjutnya'
                />
                <Button
                  variant='secondary'
                  className='w-full'
                  onClick={prevStep}
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
                  className='w-full'
                  onClick={nextStep}
                  label='Selanjutnya'
                />
                <Button
                  variant='secondary'
                  className='w-full'
                  onClick={prevStep}
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
                <Button className='w-full' to='/' label='Selesai' isLink />
                <Button
                  variant='secondary'
                  className='w-full'
                  onClick={prevStep}
                  label='Kembali'
                />
              </>
            </Controller>
          </>
        )}
      </Stepper>
    </>
  )
}

export default StepperPengajuan
