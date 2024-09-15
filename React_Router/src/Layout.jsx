import React from 'react'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Fotter'
import { Outlet } from 'react-router-dom'
const Layout = () => {
  return (
    <>
      <Header/>
      <Outlet/>  // Root provided that will be helping in this case !
      <Footer/>

    </>
  )
}

export default Layout
