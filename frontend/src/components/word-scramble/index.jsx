import React, { useState } from "react";
import Sidebar from "../sidebar/Sidebar";

const WordScrambleGame = () => {
  const [words, setWords] = useState([
    "cat",
    "dog",
    "fish",
    "bird",
    "house",
    "tree",
    "car",
    "ball",
    "kite",
    "sun",
  ]);

  const [currentWord, setCurrentWord] = useState("");
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  const handleWordChange = (event) => {
    setCurrentWord(event.target.value);
  };

  const handleWordSubmit = () => {
    const isCorrect = words[currentWordIndex] === currentWord;
    if (isCorrect) {
      alert("correct");
      setCurrentWordIndex((currentWordIndex + 1) % words.length);
      setCurrentWord("");
    } else {
      alert("incorrect");
    }
  };

  return (
    <>
      <Sidebar />
      <div
        className="mt-5"
        style={{
          width: "400px",
          margin: "0 auto",
          padding: "10px",
          border: "1px solid black",
        }}
      >
        <h1
          style={{
            color: "blue",
            fontSize: "20px",
          }}
        >
          Word Scramble Game
        </h1>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <input
            type="text"
            value={currentWord}
            onChange={handleWordChange}
            style={{
              width: "200px",
              border: "1px solid gray",
              padding: "5px",
            }}
          />
          <button
            onClick={handleWordSubmit}
            style={{
              backgroundColor: "green",
              color: "white",
              border: "none",
              padding: "5px",
            }}
          >
            Submit
          </button>
        </div>
        <div
          style={{
            marginTop: "10px",
          }}
        >
          <p
            style={{
              fontSize: "16px",
              color: "black",
            }}
          >
            Current word: {currentWord}
          </p>
          <p
            style={{
              fontSize: "16px",
              color: "red",
            }}
          >
            Correct word: {words[currentWordIndex]}
          </p>
        </div>
      </div>
    </>
  );
};

export default WordScrambleGame;
