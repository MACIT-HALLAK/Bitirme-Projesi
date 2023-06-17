import React from 'react';
import './Categories.css';
//import { useCookies } from 'react-cookie';
import Navbar from '../Navbar/Navber';
import Footer from '../Footer/Footer';
import { FaBook } from "react-icons/fa";

const Categories = () => {
const categories = [
    'İslam Dini',
    'Tarih',
    'Kültür',
    'Psikoloji',
    'Kitaplar romanlar ve edebi hikayeler',
    'Arap edebiyatı',
    'Arapça dili',
    'İslam felsefesi',
    'Mühendislik',
    'İktisat'
];

return (
    <>
    <div className='nav-1'>
        <Navbar />
    </div>

    <div className='categories'>
        {categories.map((category, index) => (
            <div className='cat-d' key={index}>
                <p className='cat-p' >{category} <FaBook size={25} className='cat-icon' /></p>
            </div>
        ))}
    </div>
    
    <Footer />
    </>
);
};

export default Categories;
