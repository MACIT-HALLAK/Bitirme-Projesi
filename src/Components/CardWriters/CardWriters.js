import React from 'react'
import WriterImage from '../../Assets/images/iyad.webp'
import './CardWriters.css'
import {FaBook} from "react-icons/fa"


const CardWriters = () => {
  return (
    <div className='writers-card-container'>
         <a href="#">
        <img src={WriterImage} alt=""></img>
        <h3>iyad al kinabi</h3>
        <p>35 kitabi var <FaBook className='book-icon' /></p>
        </a>
    </div>
  )
}

export default CardWriters