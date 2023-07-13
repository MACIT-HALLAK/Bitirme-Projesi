import './App.css';
import React, { useEffect, useState } from 'react';
import Title from './Title/Title';
import Card from './Card/Card';
import BookCategories from './BookCategories/BookCategories';
import Footer from './Footer/Footer';
import Navbar from './Navbar/Navber';
import Content from './Content/Content';
import book_img from '../Assets/images/si1.webp';
import book_img1 from '../Assets/images/book1.webp';
import book_img2 from '../Assets/images/book2.webp';
import book_img3 from '../Assets/images/book3.webp';
import writer_Img from '../Assets/images/iyad.webp';
import writer_Img1 from '../Assets/images/jalal.jpg';
import writer_Img2 from '../Assets/images/mustafa.webp';
import writer_Img3 from '../Assets/images/mutwali.webp';
import writer_Img4 from '../Assets/images/si1.webp';
import CardWriters from './CardWriters/CardWriters';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

// import Form from "./Writer/Writer";

//----Ana sayfa burasi----
function App() {
  const [data,setData] = useState([]);
  const loadData = async()=>{
    const response = await axios.get("https://librarygop.com/public/index.php/api/getnewerbooks");
    setData(response.data);
  }
  useEffect(()=>{
     loadData();
  },[])
  return (
    <div className="layout">
      <Navbar />
      <Content />
      <section>
        <Title title="En Yeni Kitaplar" />
        <div className="parent">
          {data ? data.map((items) => (
            
              <Card
                key={items.id}
                cardNumber={items.id}
                bookImage={`data:image/jpeg;base64,${items.conten_book}`}
                writerImage={`data:image/jpeg;base64,${items.conten_author}`}
                name={items.title}
                WriterName={items.author}
              />))
              :<p>no data</p>}
         
        </div>
      </section>
      <BookCategories />
      <div className='layout-footer'>
        <Footer />
      </div>
      
    </div>
  );
}
export default App;
