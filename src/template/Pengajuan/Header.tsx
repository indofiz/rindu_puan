import BackButton from './BackButton'
import logo from '../../assets/images/logo.png'
import { Link, useNavigate } from 'react-router-dom'

const Header = () => {
  const navigate = useNavigate()
  return (
    <div className='relative py-3 flex items-center justify-center md:container md:mx-auto'>
      <div className='absolute left-4'>
        <BackButton onClick={() => navigate('/')} />
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
