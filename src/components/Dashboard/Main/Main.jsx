import React from 'react'
import { Outlet } from 'react-router-dom'
import TheSidebar from '../Sidebar/TheSidebar'
import './Main.css'

const Main = () => {
  return (
    <div className="dashboard-wrapper">
        <div className="dashboard-content">
        <TheSidebar></TheSidebar>
        <Outlet></Outlet>
        </div>
    </div>
  )
}

export default Main