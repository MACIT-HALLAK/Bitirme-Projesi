import "./App.css";
import React from "react";
import Title from "./Title/Title";
import Card from "./Card/Card";
import BookCategories from "./BookCategories/BookCategories";
import Footer from "./Footer/Footer";
import Navbar from "./Navbar/Navber";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

//----Ana sayfa burasi----
function App() {
  return (
    <div className="layout">
      <Navbar />
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
