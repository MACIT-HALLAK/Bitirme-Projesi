import React from "react";
import "./Content.css";
import { Link } from "react-router-dom";
export default function Content() {
  return (
    <div className="content-main">
      <div className="main-image">
        <img src={require("../../Assets/images/Eyadprofile.jpg")}></img>
      </div>
      <div className="text-box">
        <p>
          lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem
          lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem
          lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem
          lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem
          lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem
        </p>
        <div className="footer-row">
          {/* <a className="btn btn-first">En Çok Okunan</a> */}
          <Link to='/ReadingPage' className="btn btn-second">En Çok Okunan</Link>
          <Link to='/BookPage' className="btn btn-second">Kitablar</Link>
          <Link to='/BookPage' className="btn btn-second">Bölümler</Link>
          {/* <a className="btn btn-second">Kitablar</a> */}
          {/* <a className="btn btn-third">Bölümler</a> */}
        </div>
      </div>
    </div>
  );
}
