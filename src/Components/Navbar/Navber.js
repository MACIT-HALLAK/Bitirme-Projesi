import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav>
      {/* <a href="#" class="logo" data-lang="logo">
        Ümit Adımı
      </a> */}
      <ul className="main-nav">
        <li>
          <a href="#" data-lang="contact">
            Anasayfa
          </a>
        </li>
        <li>
          <a href="#" data-lang="linkler">
            Yazarlar
          </a>
        </li>
        <li>
          <a href="#" data-lang="linkler">
            Seviyeler
          </a>
        </li>
        <li>
          <ul>
            <li>
              <input type="text" className="serach-area"></input>
              <button className="btn-search">Ara</button>
            </li>
            <li>
              <a href="#" data-lang="linkler" className="btn-auth">
                Kayit ol
              </a>
            </li>
            <li>
              <a href="#" data-lang="linkler" className="btn-auth">
                giris
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
