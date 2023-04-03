import React from 'react'
import './BookPage.css'
import Navbar from "../Navbar/Navber"
import Card from "../Card/Card";
import Footer from "../Footer/Footer";

const BookPage = () => {
    return (
    
    <div className='book-page-container'>
        <div className='BookPage-Header'>
            <Navbar/>
        </div>
        <div className='BookPage-Body'>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
        </div>
        <div className='BookPage-Footer'y>
            <Footer/>
        </div>  
    </div>
    
    )
}

export default BookPage