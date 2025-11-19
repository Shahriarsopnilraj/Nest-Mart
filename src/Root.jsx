import React from 'react'
import Navbar from './Layout/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from './Layout/Footer'
import { Toaster } from 'react-hot-toast'

const Root = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Toaster></Toaster>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  )
}

export default Root
