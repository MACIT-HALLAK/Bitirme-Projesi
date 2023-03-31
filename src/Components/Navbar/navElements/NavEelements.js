import React from "react";

export default function NavEelements({ element }) {
  return (
    <>
      <li>
        <a href={`/${element}`}>{element}</a>
      </li>
      {/* <li>
        <a href={`/${drop_element}`}>{drop_element}</a>
      </li> */}
    </>
  );
}
