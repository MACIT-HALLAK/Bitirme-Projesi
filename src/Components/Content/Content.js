import React from "react";
import "./Content.css";
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
          <a className="btn btn-first">En Çok Okunan</a>
          <a className="btn btn-second">Kitablar</a>
          <a className="btn btn-third">Bölümler</a>
        </div>
      </div>
    </div>
  );
}
