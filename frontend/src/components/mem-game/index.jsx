import Card from "./Card";
import { useState } from "react";
import styles from "./index.css"

import React from 'react'

function MemoryGame() {


  const [previous,setPrevious]=useState(-1) //-1 so that the index is out of range of our array
  const [cards, setCards] = useState([
    {id:1,img:'/mem-game/water.png', status:""}, //status checks the current status when clicked wrt previous clicked
    {id:1,img:'/mem-game/water.png', status:""},
    {id:2,img:'/mem-game/table.png', status:""},
    {id:2,img:'/mem-game/table.png', status:""},
    {id:3,img:'/mem-game/sun.png', status:""},
    {id:3,img:'/mem-game/sun.png', status:""},
    {id:4,img:'/mem-game/knife.png', status:""},
    {id:4,img:'/mem-game/knife.png', status:""},
    {id:5,img:'/mem-game/glass.png', status:""},
    {id:5,img:'/mem-game/glass.png', status:""},
    {id:6,img:'/mem-game/fan.png', status:""},
    {id:6,img:'/mem-game/fan.png', status:""},
    {id:7,img:'/mem-game/chair.png', status:""},
    {id:7,img:'/mem-game/chair.png', status:""},
    {id:8,img:'/mem-game/banana.png', status:""},
    {id:8,img:'/mem-game/banana.png', status:""},
  ].sort(()=>Math.random()-0.5))

    const handleClick=(id)=>{
      // alert(id)

      cards[id].status=" active "
      setCards([...cards])

      const checkMatch=(id)=>{
        if(cards[id].id===cards[previous].id){
          cards[id].status=" correct "
          cards[previous].status=" correct "
          setCards([...cards])
          // setPrevious(-1) //so as to start another round
        }
        else{
          cards[id].status=" wrong "
          cards[previous].status=" wrong "
          setCards([...cards])
          setTimeout(()=>{
            cards[id].status=""
            cards[previous].status=""
            setCards([...cards])
          },1000)
        }
        setPrevious(-1)
      }

      if(previous==-1){
        cards[id].status=" active "
        setCards([...cards])
        setPrevious(id)
      }else{
        checkMatch(id)
      }
    }


  return (
    <div className="Memory-Game">
      <h1>Memory Game</h1>
      <div className="cards-container">
        {
          cards.map((card,index)=><Card key={index} card={card} id={index} handleClick={handleClick}/>)
        }
      </div>
    </div>
  )
}

export default MemoryGame
