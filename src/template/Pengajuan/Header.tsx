import BackButton from './BackButton'
import logo from '../../assets/icon/logo_2.png'
import { Link, useNavigate } from 'react-router-dom'
import { Home } from 'lucide-react'

const Header = () => {
  const navigate = useNavigate()
  return (
    <div className='relative py-3 flex items-center justify-center md:container md:mx-auto'>
      <div className='absolute left-4'>
        <BackButton
          label='Home'
          icon={<Home size={18} />}
          onClick={() => navigate('/')}
        />
      </div>
      <div className=''>
        <Link to='/' relative='path'>
          <img src={logo} alt='' className='mx-auto h-12' />
        </Link>
      </div>
    </div>
  )
}

export default Header
