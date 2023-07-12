import React from 'react'
import './VerticalNavbar.css';
import {FaBook} from "react-icons/fa"

const VerticalNavbar = (props) => {
  return (
    <div className='vertical-navbar-layout'>
      {props.class? props.class.map((item)=>
        <button>{item}  <FaBook className='book-icon' /></button>

      ):""}
       
        
    </div>
  )
}

export default VerticalNavbar