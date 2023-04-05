import { click } from "@testing-library/user-event/dist/click";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import { FaAngleDown } from "react-icons/fa";
export default function NavEelements({ element, clicking, handle }) {
  return (
    <>
      <li className={element === "Seviyeler" ? "level " : ""}>
        {element === "Seviyeler" ? (
          <div
            className={`input ${handle === true ? "active" : ""}`}
            style={{ cursor: "pointer" }}
            data-drop-button=""
            onClick={clicking}
          >
            {element}
            <ul className="our-list">
              <li>
                <Link to="Seviyeler/ileri">ileri</Link>
              </li>
              <li>
                <Link to="Seviyeler/orta">orta</Link>
              </li>
              <li>
                <Link to="Seviyeler/temel">temel</Link>
              </li>
            </ul>
          </div>
        ) : (
          <Link to={`/${element}`} className="input">
            {element}
          </Link>
        )}

        {/* {element === "Seviyeler" ? <FaAngleDown className="drop-icon" /> : ""} */}
      </li>
    </>
  );
}
