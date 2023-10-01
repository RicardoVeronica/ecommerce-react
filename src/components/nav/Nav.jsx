import { NavLink } from 'react-router-dom'

import './nav.css'

const Nav = () => {
  return (
    <>
      <nav className='nav'>
        <NavLink
          className={({ isActive }) => isActive ? 'nav__link nav__link--active' : 'nav__link'}
          to={'/'}
        >
          Store
        </NavLink>

        <NavLink
          className={({ isActive }) => isActive ? 'nav__link nav__link--active' : 'nav__link'}
          to={'/about'}
        >
          About
        </NavLink>
      </nav >
    </>
  )
}

export default Nav