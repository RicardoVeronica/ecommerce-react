import { Link } from 'react-router-dom'

import './nav.css'

const Nav = () => {
  return (
    <>
      <nav className='nav'>
        <Link className='nav__link' to="/">Store</Link>
        <Link className='nav__link' to="/about">About</Link>
      </nav>
    </>
  )
}

export default Nav