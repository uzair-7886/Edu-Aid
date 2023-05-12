import React, { useState, useEffect, useRef } from 'react';
import './PuzzleGame.css';

const PuzzleGame = ({ imageUrl }) => {
  const [puzzlePieces, setPuzzlePieces] = useState([]);
  const [framePieces, setFramePieces] = useState(Array.from({ length: 9 }));
  const [isSolved, setIsSolved] = useState(false);
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    const image = new Image();
    image.src = imageUrl;
    image.onload = () => {
      const pieceWidth = image.width / 3;
      const pieceHeight = image.height / 3;
      const pieces = [];

      for (let i = 0; i < 9; i++) {
        const x = (i % 3) * pieceWidth;
        const y = Math.floor(i / 3) * pieceHeight;
        const piece = {
          x,
          y,
          width: pieceWidth,
          height: pieceHeight,
          imageX: x,
          imageY: y,
          imageWidth: pieceWidth,
          imageHeight: pieceHeight,
          dragStartX: null,
          dragStartY: null,
          isDragging: false,
          index: i,
        };
        pieces.push(piece);
      }

      setPuzzlePieces(pieces);
      ctx.drawImage(image, 0, 0);
    };
  }, [imageUrl]);

  function handleDragStart(e, index) {
    const piece = puzzlePieces[index];
    piece.dragStartX = e.clientX - piece.x;
    piece.dragStartY = e.clientY - piece.y;
    piece.isDragging = true;
  }

  function handleDragMove(e, index) {
    if (puzzlePieces[index].isDragging) {
      const piece = { ...puzzlePieces[index] };
      piece.x = e.clientX - piece.dragStartX;
      piece.y = e.clientY - piece.dragStartY;
      setPuzzlePieces(prevPieces =>
        prevPieces.map((p, i) => (i === index ? piece : p))
      );
    }
  }

  function handleDragEnd(index) {
    const piece = { ...puzzlePieces[index] };
    piece.isDragging = false;
    const frameIndex = getFrameIndex(piece);
    if (frameIndex >= 0) {
      setFramePieces(prevPieces =>
        prevPieces.map((p, i) => (i === frameIndex ? piece : p))
      );
      const isPuzzleSolved = checkPuzzleSolved();
      setIsSolved(isPuzzleSolved);
    }
  }

  function getFrameIndex(piece) {
    const frameRect = canvasRef.current.getBoundingClientRect();
    const pieceRect = {
      left: piece.x,
      top: piece.y,
      right: piece.x + piece.width,
      bottom: piece.y + piece.height,
    };
    if (
      pieceRect.right >= frameRect.left &&
      pieceRect.left <= frameRect.right &&
      pieceRect.bottom >= frameRect.top &&
      pieceRect.top <= frameRect.bottom
    ) {
      const xIndex = Math.floor((piece.x + piece.width / 2) / (frameRect.width / 3));
      const yIndex = Math.floor((piece.y + piece.height / 2) / (frameRect.height / 3));
      return yIndex * 3 + xIndex;
    }
    return -1;
  }

  function checkPuzzleSolved() {
    for (let i = 0; i < framePieces.length; i++) {
      if (framePieces[i].index !== i) {
        return false;
      }
    }
    return true;
  }

  function handleReset() {
    setFramePieces(Array.from({ length: 9 }));
    setIsSolved(false);
  }

  return (
    <div className="puzzle-game">
      <canvas
        className="puzzle-canvas"
        ref={canvasRef}
        width={300}
        height={300}
        onMouseDown={e => {
          const index = puzzlePieces.findIndex(piece => {
            const pieceRect = {
              left: piece.x,
              top: piece.y,
              right: piece.x + piece.width,
              bottom: piece.y + piece.height,
            };
            return (
              e.clientX >= pieceRect.left &&
              e.clientX <= pieceRect.right &&
              e.clientY >= pieceRect.top &&
              e.clientY <= pieceRect.bottom
            );
          });
          if (index >= 0) {
            handleDragStart(e, index);
          }
        }}
        onMouseMove={e => {
          for (let i = 0; i < puzzlePieces.length; i++) {
            if (puzzlePieces[i].isDragging) {
              handleDragMove(e, i);
              break;
            }
          }
        }}
        onMouseUp={() => {
          for (let i = 0; i < puzzlePieces.length; i++) {
            if (puzzlePieces[i].isDragging) {
              handleDragEnd(i);
              break;
            }
          }
        }}
      />
      {!isSolved && (
        <div className="puzzle-frame">
          {framePieces.map((piece, i) => (
            <div
              className="puzzle-frame-piece"
              key={i}
              style={{
                left: `${(i % 3) * 100 / 3}%`,
                top: `${Math.floor(i / 3) * 100 / 3}%`,
                backgroundImage: `url(${imageUrl})`,
                backgroundPosition: `-${piece.imageX}px -${piece.imageY}px`,
                backgroundSize: `${canvasRef.current.width}px ${canvasRef.current.height}px`,
              }}
              onMouseDown={() => {
                if (piece.index !== undefined) {
                  const pieceIndex = puzzlePieces.findIndex(p => p.index === piece.index);
                  if (pieceIndex >= 0) {
                    const newPiece = { ...puzzlePieces[pieceIndex] };
                    newPiece.imageX = piece.x;
                    newPiece.imageY = piece.y;
                    newPiece.imageWidth = piece.width;
                    newPiece.imageHeight = piece.height;
                    setPuzzlePieces(prevPieces =>
                      prevPieces.map((p, i) => (i === pieceIndex ? newPiece : p))
                    );
                    setFramePieces(prevPieces =>
                      prevPieces.map((p, i) => (i === piece.index ? {} : p))
                    );
                  }
                }
              }}
            />
          ))}
        </div>
      )}
      {isSolved && <div className="puzzle-solved">Congratulations, you solved the puzzle!</div>}
      <button className="puzzle-reset" onClick={handleReset}>
        Reset
      </button>
    </div>
  );
};

export default PuzzleGame;