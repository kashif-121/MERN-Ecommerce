import React from 'react'
import {HiOutlineBars3BottomLeft} from "react-icons/hi2"
import './TheTopbar.css'

const TheTopbar = () => {
  return (
    <div className="topbar-wrapper">
        <div className="search-container">
        <HiOutlineBars3BottomLeft className="bars"/>
        </div>
    </div>
  )
}

export default TheTopbar