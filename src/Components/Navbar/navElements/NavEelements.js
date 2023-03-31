import React from "react";
import { FaAngleDown } from "react-icons/fa";

export default function NavEelements({ element }) {
  return (
    <>
      <li className={element === "Seviyeler" ? "level" : ""}>
        <a href={`/${element}`}>{element}</a>
        {element === "Seviyeler" ? <FaAngleDown className="drop-icon" /> : ""}
      </li>
    </>
  );
}
