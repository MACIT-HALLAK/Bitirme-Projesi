import React from 'react'
import WriterImage from '../../Assets/images/iyad.webp'
import './CardWriters.css'
import {FaBook} from "react-icons/fa"
import { Link } from 'react-router-dom'


const CardWriters = (props) => {
  return (
    <div className='writers-card-container'>
         <Link to="/Writer">
        <img src={props.WriterImage} alt=""></img>
        <h3>{props.writerName}</h3>
        <p>35 kitabi var <FaBook className='book-icon' /></p>
        </Link>
    </div>
  )
}

export default CardWriters