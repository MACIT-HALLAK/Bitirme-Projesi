import React from "react";
import { Link } from "react-router-dom";

export default function NavEelements({ element }) {
  return (
    <>
      <li>
        <Link to={`/${element}`}>{element}</Link>
      </li>
    </>
      
  );
}
