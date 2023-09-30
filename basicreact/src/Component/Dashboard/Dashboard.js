import React from 'react'
import Sidebar from '../sideBar/Sidebar';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';

function Dashboard() {
  return (
    <>
        <Sidebar />
      
        <Outlet />
        <Footer />
    </>
  )
}

export default Dashboard