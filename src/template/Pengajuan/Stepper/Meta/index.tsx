import { DataStepper } from '../interface'

const Meta: React.FC<DataStepper> = ({ data, current }) => {
  return (
    <div className='text-center mx-16 mt-3 mb-12'>
      <h1 className='text-2xl mb-1 font-semibold text-gray-900'>
        {data[current] && data[current].title}
      </h1>
      <p className='text-sm font-light text-gray-500'>
        {data[current] && data[current].description}
      </p>
    </div>
  )
}

export default Meta
