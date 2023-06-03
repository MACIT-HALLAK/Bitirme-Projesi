import React from 'react'
import './VerticalNavbar.css';
import {FaBook} from "react-icons/fa"

const VerticalNavbar = () => {
  return (
    <div className='vertical-navbar-layout'>
        <button>Reader At Work 2  <FaBook className='book-icon' /></button>
        <button>Huckbery Finn Maceralari <FaBook className='book-icon' /></button>
        <button>قصص للأطفال <FaBook className='book-icon' /></button>
        <button>Alistirma kitabi <FaBook className='book-icon' /></button>
        <button>Reader At Work 1 <FaBook className='book-icon' /></button>
        <button>Reader At Work <FaBook className='book-icon' /></button>
        <button>Reader At Work <FaBook className='book-icon' /></button>
    </div>
  )
}

export default VerticalNavbar