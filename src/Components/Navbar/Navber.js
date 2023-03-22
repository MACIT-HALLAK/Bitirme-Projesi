import React, { useState } from "react";
import "./Navbar.css";
import { FaSearch } from "react-icons/fa";
import { FaList } from "react-icons/fa";
import NavEelements from "./navElements/NavEelements";

const Navbar = () => {
  const [value, setValue] = useState(() => "");
  const [btnState, setBtnState] = useState(() => false);
  function handleClick() {
    setBtnState((btnState) => !btnState);
  }
  let toggleClassCheck = btnState ? "hide" : "";
  let arr = ["Anasayfa", "Yazarlar", "Seviyeler"];
  return (
    <>
      <nav>
        <FaList className="menu-bars" onClick={handleClick} />
        <ul className={`main-nav ${toggleClassCheck}`}>
          {/* call main elments in navbar */}
          {arr.map((element, index) => {
            return <NavEelements element={element} key={index} />;
          })}
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
