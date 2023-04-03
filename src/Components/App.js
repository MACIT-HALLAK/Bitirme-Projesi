import "./App.css";
import React from "react";
import Title from "./Title/Title";
import Card from "./Card/Card";
import BookCategories from "./BookCategories/BookCategories";
import Footer from "./Footer/Footer";
import Navbar from "./Navbar/Navber";
import Content from "./Content/Content";
import Form from "./Writer/Writer";
import BookPage from "./BookPage/BookPage";

//----Ana sayfa burasi----
function App() {
  return (
    <div className="layout">
    <Navbar />
    <Content />
    <section>
      <Title />
      <div className="parent">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    
    </section>
    <BookCategories />
    <Footer />
    
  </div>
  
  );
}
export default App;
