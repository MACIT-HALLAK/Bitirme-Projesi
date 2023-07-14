import './App.css';
import React, { useEffect, useState } from 'react';
import Title from './Title/Title';
import Card from './Card/Card';
import BookCategories from './BookCategories/BookCategories';
import Footer from './Footer/Footer';
import Navbar from './Navbar/Navber';
import Content from './Content/Content';
import CardWriters from './CardWriters/CardWriters';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

// import Form from "./Writer/Writer";

//----Ana sayfa burasi----
function App() {
  const [data, setData] = useState([]);
  const loadData = async () => {
    const response = await axios.get(
      'https://librarygop.com/public/index.php/api/getnewerbooks'
    );
    setData(response.data);
  };
  useEffect(() => {
    loadData();
  }, []);
  return (
    <div className="layout">
      <Navbar />
      <Content />
      <section>
        <Title title="En Yeni Kitaplar" />
        <div className="parent">
          {data ? (
            data.map((items) => (
              <Card
                key={items.id}
                cardNumber={items.id}
                bookImage={`data:image/jpeg;base64,${items.conten_book}`}
                writerImage={`data:image/jpeg;base64,${items.conten_author}`}
                name={items.title}
                WriterName={items.author}
              />
            ))
          ) : (
            <p>no data</p>
          )}
        </div>
      </section>
      <BookCategories />
      <div className="layout-footer">
        <Footer />
      </div>
    </div>
  );
}
export default App;
