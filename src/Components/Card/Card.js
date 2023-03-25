import React from "react";
import "./Card.css";
import book_img from "../../Assets/images/si1.webp";
import writer_img from "../../Assets/images/iyad.webp";

const Card = () => {
  return (
    <div className="card-container">
      <img className="book-img" src={book_img} alt="" />
      <img className="writer-img" src={writer_img} alt="" />
      <h4>Soyluların biyografisi</h4>
      <p>Muhammed Ali El-Sabouni</p>
    </div>
  );
};

export default Card;
