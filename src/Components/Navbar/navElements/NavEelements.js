import { click } from "@testing-library/user-event/dist/click";
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
                <a href="/ileri">ileri</a>
              </li>
              <li>
                <a href="/orta">orta</a>
              </li>
              <li>
                <a href="/temel">temel</a>
              </li>
            </ul>
          </div>
        ) : (
          <a href={`/${element}`} className="input">
            {element}
          </a>
        )}

        {/* {element === "Seviyeler" ? <FaAngleDown className="drop-icon" /> : ""} */}
      </li>
    </>
  );
}
