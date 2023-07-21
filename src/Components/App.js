import './App.css';
import React, { useEffect, useState, useContext } from 'react';
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
import { DataContext } from './DataContext';
import ChildComponent from './ChildComponent';
import { Link } from 'react-router-dom';

// import Form from "./Writer/Writer";

//----Ana sayfa burasi----
function App() {
  const data = useContext(DataContext);

  return (
    <div className="layout">
      <Navbar />
      <Content
        items={[
          <Link to="/MostRepeatedBooks" className="btn btn-second">
            En Çok Okunan
          </Link>,
          <Link to="/BookPage" className="btn btn-second">
            Kitablar
          </Link>,
          <Link to="/Categories" className="btn btn-second">
            Bölümler
          </Link>,
          <Link to="/WordsPage" className="btn btn-second">
            Kelimelerim
          </Link>,
        ]}
      />
      <section>
        <Title title="En Yeni Kitaplar" />
        <div className="parent">
          <ChildComponent data={data} />
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
