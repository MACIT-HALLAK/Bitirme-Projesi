import React from "react";
import "./Card.css";
import writer_img from "../../Assets/images/iyad.webp";

//-----card component burasi-----
const Card = (props) => {
  return (
    <div className="card-container">
      <img className="book-img" src={props.bookImage} alt="" />
      <img className="writer-img" src={props.writerImage} alt="" />
      <h4>{props.name}</h4>
      <p>{props.WriterName}</p>
    </div>
  );
};

export default Card;
