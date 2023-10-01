import './nav.css'

const Nav = () => {
  return (
    <>
      <nav className='nav'>
        <a className='nav__link nav__link--active' href="#">Store</a>
        <a className='nav__link' href="#">About</a>
      </nav>
    </>
  )
}

export default Nav