import React from "react";
import "./Writerspage.css";
import Navbar from "../Navbar/Navber";
import CardWriters from "../CardWriters/CardWriters";
import WriterImage from '../../Assets/images/iyad.webp'
import WriterImage1 from '../../Assets/images/si1.webp'
import WriterImage2 from '../../Assets/images/jalal.jpg'
import WriterImage3 from '../../Assets/images/mutwali.webp'
import WriterImage4 from '../../Assets/images/mustafa.webp'

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
        <CardWriters WriterImage={WriterImage} writerName="Iyad al kinabi"/>
        <CardWriters WriterImage={WriterImage1} writerName="Osman yusuf"/>
        <CardWriters WriterImage={WriterImage3} writerName="Mohammed al sharawi"/>
        <CardWriters WriterImage={WriterImage4} writerName="Mustafa mahmud"/>
        <CardWriters WriterImage={WriterImage2} writerName="Jalal aldin alromi"/>
        <CardWriters WriterImage={WriterImage3} writerName="iyad al kinabi"/>
        <CardWriters WriterImage={WriterImage2} writerName="iyad al kinabi"/>
      </div>
      <Footer />
    </div>
  );
};

export default Writerspage;
