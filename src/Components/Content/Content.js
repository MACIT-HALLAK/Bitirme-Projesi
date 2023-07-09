import React from "react";
import "./Content.css";
import { Link } from "react-router-dom";
import lib from '../../Assets/images/library.png'
export default function Content() {
  return (
    <div className="content-main">
     
      <div className="text-box">
          <p>Merhaba Maced HALLAK</p>
          <p>EJIYAL Kütüphanesine Hoşgeldiniz</p>
       <img className="content-logo" src={lib} />
        <div className="footer-row">
          {/* <a className="btn btn-first">En Çok Okunan</a> */}
          <Link to='/ReadingPage' className="btn btn-second">En Çok Okunan</Link>
          <Link to='/BookPage' className="btn btn-second">Kitablar</Link>
          <Link to='/Categories' className="btn btn-second">Bölümler</Link>
          {/* <a className="btn btn-second">Kitablar</a> */}
          {/* <a className="btn btn-third">Bölümler</a> */}
        </div>
      </div>
    </div>
  );
}
