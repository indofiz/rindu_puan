import logo from '../../assets/images/logo.png'
import menu from '../../assets/icon/menu_pink.svg'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex px-6 py-2 justify-between items-center'>
      <Link to='/' relative='path'>
        <img src={logo} className='mt-0 w-32' />
      </Link>
      <button>
        <img src={menu} />
      </button>
    </div>
  )
}

export default Navbar
