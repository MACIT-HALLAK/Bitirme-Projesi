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

// import Form from "./Writer/Writer";

//----Ana sayfa burasi----
function App() {
  const data = useContext(DataContext);

  return (
    <div className="layout">
      <Navbar />
      <Content />
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
