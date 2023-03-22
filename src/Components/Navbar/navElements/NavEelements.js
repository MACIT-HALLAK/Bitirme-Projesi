import React from "react";

export default function NavEelements({ element }) {
  return (
    <>
      <li>
        <a href={`/${element}`}>{element}</a>
      </li>
    </>
  );
}
