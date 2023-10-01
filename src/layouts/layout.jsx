import Header from '../components/header/Header'
import Nav from '../components/nav/Nav'
import Footer from '../components/footer/Footer'

import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <>
      <Header />

      <Nav />

      <Outlet />

      <Footer />
    </>
  )
}

export default Layout