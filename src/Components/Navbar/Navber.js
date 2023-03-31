import React, { useState } from "react";
import "./Navbar.css";
import { FaSearch } from "react-icons/fa";
import { FaList } from "react-icons/fa";
import NavEelements from "./navElements/NavEelements";

const Navbar = () => {
  const [value, setValue] = useState(() => "");
  const [btn_state, setBtnState] = useState(() => false);
  function handleClick() {
    setBtnState((btn_state) => !btn_state);
  }
  let toggle_class_check = btn_state ? "hide" : "";
  let nav_items = [
    "Anasayfa",
    "Yazarlar",
    "Seviyeler",
    "Temel düzey",
    "Orta düzey",
    "İleri düzey",
  ];
  // let drop_items = ["Temel düzey", "Orta düzey", "İleri düzey"];
  return (
    <>
      <nav>
        <FaList className="menu-bars" onClick={handleClick} />
        <ul className={`main-nav ${toggle_class_check}`}>
          {/* call main elments in navbar */}
          {nav_items.map((element, index) => {
            return index < 3 ? (
              <NavEelements element={element} key={index} />
            ) : (
              ""
            );
          })}
          <div className="drop-items">
            {nav_items.map((element, index) => {
              return index >= 3 ? (
                <NavEelements element={element} key={index} />
              ) : (
                ""
              );
            })}
          </div>
          <li>
            <ul>
              <li className="alt-box">
                <div className="box">
                  <form name="search">
                    <input
                      type="text"
                      className="input"
                      name="txt"
                      value={value}
                      onMouseEnter={() => setValue()}
                      onMouseLeave={() => setValue("")}
                    ></input>
                  </form>
                  <FaSearch />
                </div>
                <div className="auth">
                  <a href="#" data-lang="linkler" className="btn-auth">
                    Register
                  </a>
                  <a href="#" data-lang="linkler" className="btn-auth">
                    Login
                  </a>
                </div>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
