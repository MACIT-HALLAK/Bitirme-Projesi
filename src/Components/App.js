import "./App.css";
import React from "react";
import Title from "./Title/Title";
import Card from "./Card/Card";
import BookCategories from "./BookCategories/BookCategories";
import Footer from "./Footer/Footer";
import Navbar from "./Navbar/Navber";
import Content from "./Content/Content";
import Writerspage from "./Writerspage/Writerspage";
import CardWriters from "./CardWriters/CardWriters";
// import Form from "./Writer/Writer";

//----Ana sayfa burasi----
function App() {
  return (
    <>
        <Writerspage />
       
    </>
  //  <div className="layout">
  //    <Navbar />
  //    <Content />
  //    <section>
  //      <Title />
  //      <div className="parent">
  //        <Card />
  //        <Card />
  //        <Card />
  //        <Card />
  //        <Card />
  //      </div>
  //    </section>
  //    <BookCategories />
  //    <Footer />
  //   </div>
 
  );
}
export default App;
