import React from 'react'
import './BookCategories.css';
import {FaBook} from "react-icons/fa"

const BookCategories = () => {
  return (
    <aside className='chapters-wraper'>
        <h2>Kitab Bölümleri</h2>
        
        <a href="#">İslam Dini <FaBook className='book-icon' /></a>
        <a href="#">Tarih <FaBook className='book-icon' /></a>
        <a href="#">Kültür <FaBook className='book-icon' /></a>
        <a href="#">Piskoloj <FaBook className='book-icon' /></a>
        <a href="#">Kitaplar romanlar ve edebi hikayeler <FaBook className='book-icon' /></a>   
        <a href="#">Arap edebiyatı <FaBook className='book-icon' /></a>   
        <a href="#">Arapça dili <FaBook className='book-icon' /></a>   
        <a href="#">İslam felsefesi <FaBook className='book-icon' /></a>   
        <a href="#">Mühendislik <FaBook className='book-icon' /></a>   
        
    </aside>  
    )
}

export default BookCategories