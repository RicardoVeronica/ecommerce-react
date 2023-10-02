import Logo from "../../../public/img/logo.png"

import "./header.css"

const Header = () => {
  return (
    <>
      <header className="header">
        <a href="/">
          <img
            className="header__logo"
            src={Logo}
            alt="Ecommerce Logo"
          />
        </a>
      </header>
    </>
  )
}

export default Header