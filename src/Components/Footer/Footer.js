import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <h3>Mektebe Kütüphanesine Hoşgeldiniz </h3>
      <p>
        Burada bütün kitablar dil öğrenmek için veya kitabı okurken kendi
        düşüncelerini kayıt edebilirsiniz, umarım bu siteyi beğenirsiniz{" "}
      </p>
      <div className="footer-parent">
        Geliştiriciler
        <div>Maced hallak 05541662332</div>
        <div>Abdullah ghazal 0000000000</div>
        <div>Bara fedallah 0000000000</div>
        <div>Abdulilah ökkeş 0000000000</div>
        <h5>2023 c</h5>
      </div>
    </footer>
  );
};

export default Footer;
