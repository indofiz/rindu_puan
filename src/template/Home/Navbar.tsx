import logo from '../../assets/icon/logo_2.png'
import menu from '../../assets/icon/menu_pink.svg'
import close from '../../assets/icon/close_pink.svg'
import { Link, NavLink } from 'react-router-dom'
import { useState } from 'react'
import { cn } from '../../utils/classMerge'

const Navbar = () => {
  const [isSidebar, setisSidebar] = useState(false)
  return (
    <div className='flex px-6 py-2 justify-between items-center md:container md:mx-auto'>
      <Link to='/' relative='path'>
        <img src={logo} className='mt-0 h-12' />
      </Link>
      <button
        className='md:hidden'
        onClick={() => setisSidebar((prev) => !prev)}
      >
        <img src={isSidebar ? close : menu} />
      </button>
      <nav
        className={cn(
          'fixed w-3/4 md:static md:w-auto bottom-0 left-0 top-0 flex justify-center z-40 border-r-4 border-black bg-primary md:bg-transparent md:border-r-0 items-center transition-all',
          isSidebar
            ? 'translate-x-0'
            : '-translate-x-[calc(100%+16px)] md:translate-x-0'
        )}
      >
        <ul className='flex gap-8 flex-col md:flex-row text-white md:text-black uppercase md:text-sm md:gap-4 font-semibold px-5'>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? 'text-primary' : '')}
              to='/'
            >
              Beranda
            </NavLink>
          </li>
          <li>
            <NavLink to='/'>Tentang</NavLink>
          </li>
          <li>
            <NavLink to='/'>Alur Pengaduan</NavLink>
          </li>
          <li>
            <NavLink to='/'>Artikel</NavLink>
          </li>
          <li>
            <NavLink to='/'>FAQ</NavLink>
          </li>
          <li>
            <NavLink to='/'>Hubungi Kami</NavLink>
          </li>
          <li>
            <NavLink to='/'>Panduan</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
