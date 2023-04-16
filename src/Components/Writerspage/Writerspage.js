import React from "react";
import "./Writerspage.css";
import Navbar from "../Navbar/Navber";
import CardWriters from "../CardWriters/CardWriters";
import Footer from "../Footer/Footer";
import { FaSearch } from "react-icons/fa";

const Writerspage = () => {
  return (
    <div className="Writerspage-layout">
      <Navbar />
      <div className="Writerspage-layout-arama">
        <h3>
          <span>
            <FaSearch />
          </span>
          <input type="text" placeholder="Bir Yazarın Ara"></input>
        </h3>
      </div>
      <div className="parent">
        <CardWriters />
        <CardWriters />
        <CardWriters />
        <CardWriters />
        <CardWriters />
        <CardWriters />
        <CardWriters />
        <CardWriters />
      </div>
      <Footer />
    </div>
  );
};

export default Writerspage;
