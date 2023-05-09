import "./App.css";
import React, { useEffect } from "react";
import Title from "./Title/Title";
import Card from "./Card/Card";
import BookCategories from "./BookCategories/BookCategories";
import Footer from "./Footer/Footer";
import Navbar from "./Navbar/Navber";
import Content from "./Content/Content";
import book_img from "../Assets/images/si1.webp";
import book_img1 from "../Assets/images/book1.webp";
import book_img2 from "../Assets/images/book2.webp";
import book_img3 from "../Assets/images/book3.webp";
import book_img4 from "../Assets/images/si1.webp";
import writer_Img from "../Assets/images/iyad.webp";
import writer_Img1 from "../Assets/images/jalal.jpg";
import writer_Img2 from "../Assets/images/mustafa.webp";
import writer_Img3 from "../Assets/images/mutwali.webp";
import writer_Img4 from "../Assets/images/si1.webp";
import CardWriters from "./CardWriters/CardWriters";
// import Form from "./Writer/Writer";

//----Ana sayfa burasi----
function App() {
  return (
    <div className="layout">
      <Navbar />
      <Content />
      <section>
        <Title />
        <div className="parent">
          <Card bookImage={book_img} writerImage={writer_Img}/>
          <Card bookImage={book_img1} writerImage={writer_Img1}/>
          <Card bookImage={book_img2} writerImage={writer_Img2}/>
          <Card bookImage={book_img3} writerImage={writer_Img3}/>
          <Card bookImage={book_img2} writerImage={writer_Img4}/>
        </div>
      </section>
      <BookCategories />
      <Footer />
    </div>
  );
}
export default App;
