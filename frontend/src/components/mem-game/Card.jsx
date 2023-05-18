import React from "react";
import styles from "./index.css";

function Card({ card, id, handleClick }) {
  const classOfCard = card.status ? " active " + card.status : "";

  return (
    <div
      className={" cards " + "card" + classOfCard + "mb-3"}
      style={{ width: "7.5rem" }}
      onClick={() => handleClick(id)}
    >
      {/* <p>card</p> */}
      <img className={`img-fluid ${styles.card}`} src={card.img} alt="image" />
    </div>
  );
}

export default Card;
