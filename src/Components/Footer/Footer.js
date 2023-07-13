import React from 'react';
import './Footer.css'; // Footer bileşeninin stillerini içeren CSS dosyası
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <footer>
      <div className="inner-footer">
        <div className="footer-items-1">
          <h2>Ejyal Kütüphanesi</h2>
          <p>Öğrenme ve pratik yapma yolunuz.</p>
        </div>

        <div className="footer-items-2">
          <h3>Hızlı Linkler</h3>
          <div className="border1"></div>
          <ul className="footer-ul">
            <Link to="/">Anasayfa</Link>
            <Link to="/Yazarlar">Yazarlar</Link>
            <Link to="/Seveyeler">Seveyeler</Link>
          </ul>
        </div>

        <div className="footer-items-3">
          <h3>Örenebilir Diller</h3>
          <div className="border2"></div>
          <ul className="footer-ul">
            <li className="footer-li">Arapça</li>
            <li className="footer-li">Türkçe</li>
            <li className="footer-li">Engilizce</li>
          </ul>
        </div>

        <div className="footer-items-4">
          <h3>İletişim</h3>
          <div className="border3"></div>
          <ul className="footer-ul">
            <li className="footer-li">bitirmeprojesi</li>
            <li className="footer-li">0000000000</li>
            <li className="footer-li">bitirmeprojesi853</li>
          </ul>

          <div className="social-media">
            <i className="fab fa-instagram"></i>
            <i className="fab fa-facebook"></i>
            <i className="fab fa-google-plus-square"></i>
          </div>
        </div>
      </div>

      <div className="footer-bottom">Ejyal Kütüphanesi</div>
    </footer>
  );
};

export default Footer;
