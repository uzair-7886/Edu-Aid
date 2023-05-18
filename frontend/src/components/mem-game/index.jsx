import Card from "./Card";
import { useEffect, useState, useRef } from "react";
import styles from "./index.css";

import React from "react";
import Sidebar from "../sidebar/Sidebar";
import { useNavigate } from "react-router-dom";

function MemoryGame() {
  const Navigate = useNavigate();
  var Score = useRef({
    easy: 0,
    medium: 0,
    hard: 0,
  });
  const [previous, setPrevious] = useState(-1); //-1 so that the index is out of range of our array
  const [cards, setCards] = useState([]);

  const [difficulty, setDifficulty] = useState("");

  const createCards = () => {
    let cardData = [];
    // Generate cards based on difficulty level
    if (difficulty === "easy") {
      cardData = [
        { id: 1, img: "/water.png", status: "" },
        { id: 1, img: "/water.png", status: "" },
        { id: 2, img: "/table.png", status: "" },
        { id: 2, img: "/table.png", status: "" },
      ];
    } else if (difficulty === "medium") {
      cardData = [
        { id: 1, img: "/water.png", status: "" },
        { id: 1, img: "/water.png", status: "" },
        { id: 2, img: "/table.png", status: "" },
        { id: 2, img: "/table.png", status: "" },
        { id: 3, img: "/sun.png", status: "" },
        { id: 3, img: "/sun.png", status: "" },
        { id: 4, img: "/knife.png", status: "" },
        { id: 4, img: "/knife.png", status: "" },
      ];
    } else if (difficulty === "hard") {
      cardData = [
        { id: 1, img: "/water.png", status: "" },
        { id: 1, img: "/water.png", status: "" },
        { id: 2, img: "/table.png", status: "" },
        { id: 2, img: "/table.png", status: "" },
        { id: 3, img: "/sun.png", status: "" },
        { id: 3, img: "/sun.png", status: "" },
        { id: 4, img: "/knife.png", status: "" },
        { id: 4, img: "/knife.png", status: "" },
        { id: 5, img: "/glass.png", status: "" },
        { id: 5, img: "/glass.png", status: "" },
        { id: 6, img: "/fan.png", status: "" },
        { id: 6, img: "/fan.png", status: "" },
        { id: 7, img: "/chair.png", status: "" },
        { id: 7, img: "/chair.png", status: "" },
        { id: 8, img: "/banana.png", status: "" },
        { id: 8, img: "/banana.png", status: "" },
      ];
    }

    // Shuffle the card data
    cardData.sort(() => Math.random() - 0.5);

    setCards(cardData);
  };
  var [Correct, setCorrect] = useState(1);
  const handleClick = (id) => {
    // alert(id)
    cards[id].status = " active ";
    setCards([...cards]);
    const checkMatch = (id) => {
      if (cards[id].id === cards[previous].id) {
        cards[id].status = " correct ";
        cards[previous].status = " correct ";
        setCards([...cards]);
        if (difficulty == "easy") {
          setCorrect(Correct + 1);
          console.log(Correct);
          if (Correct == 2) {
            Score.current = {
              ...Score.current,
              [difficulty]: Correct,
            };
            setCorrect(1);
            console.log(Score.current);
            document.getElementById("medium").click();
          }
        }
        if (difficulty == "medium") {
          setCorrect(Correct + 2);
          console.log(Correct);
          if (Correct == 7) {
            Score.current = {
              ...Score.current,
              [difficulty]: Correct,
            };
            console.log(Score.current);
            document.getElementById("hard").click();
            setCorrect(1);
          }
        }
        if (difficulty == "hard") {
          setCorrect(Correct + 3);
          console.log(Correct);
          if (Correct == 22) {
            Score.current = {
              ...Score.current,
              [difficulty]: Correct,
            };

            Navigate("/dashboard", { state: Score.current });
          }
        }
      } else {
        cards[id].status = " wrong ";
        cards[previous].status = " wrong ";
        setCards([...cards]);
        setTimeout(() => {
          cards[id].status = "";
          cards[previous].status = "";
          setCards([...cards]);
        }, 500);
      }
      setPrevious(-1);
    };

    if (previous === -1) {
      cards[id].status = " active ";
      setCards([...cards]);
      setPrevious(id);
    } else {
      checkMatch(id);
    }
  };

  useEffect(() => {
    createCards();
  }, [difficulty]);

  return (
    <>
      <Sidebar />
      <div className="Memory-Game">
        <div className="container">
          <h1 className="py-4">Memory Game</h1>
          <div className="difficulty-buttons d-flex justify-content-between ">
            <button
              className="btn btn-lg btn-success mt-3"
              onClick={() => {
                setDifficulty("easy");
              }}
            >
              Easy
            </button>
            <button
              className="btn btn-lg btn-success  mt-3"
              id="medium"
              onClick={() => {
                setDifficulty("medium");
              }}
            >
              Medium
            </button>
            <button
              className="btn btn-lg btn-success  mt-3"
              id="hard"
              onClick={() => {
                setDifficulty("hard");
              }}
            >
              Hard
            </button>
          </div>

          <div className="d-flex justify-content-center">
            <div
              className="cards-container mt-5 justify-content-center"
              style={{ width: "40%" }}
            >
              {cards.map((card, index) => (
                <Card
                  key={index}
                  card={card}
                  id={index}
                  handleClick={handleClick}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MemoryGame;
