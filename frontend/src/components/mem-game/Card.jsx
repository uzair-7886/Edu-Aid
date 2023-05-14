import React from 'react'

function Card({card,id,handleClick}) {

  const classOfCard=card.status?" active "+card.status:"";

  return (
    <div className={" card " + classOfCard} onClick={()=>handleClick(id)}>
      {/* <p>card</p> */}
      <img src={card.img} alt="image" />
    </div>
  )
}

export default Card
