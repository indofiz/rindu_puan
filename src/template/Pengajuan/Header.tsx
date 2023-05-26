import BackButton from './BackButton'
import logo from '../../assets/images/logo.png'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='relative py-3 flex items-center justify-center'>
      <div className='absolute left-4'>
        <BackButton />
      </div>
      <div className=''>
        <Link to='/' relative='path'>
          <img src={logo} alt='' className='mx-auto w-32' />
        </Link>
      </div>
    </div>
  )
}

export default Header
