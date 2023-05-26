import { DataStepper } from '../interface'

const MainContent: React.FC<DataStepper> = ({ data, current }) => {
  return <>{data[current] && data[current].content}</>
}

export default MainContent
