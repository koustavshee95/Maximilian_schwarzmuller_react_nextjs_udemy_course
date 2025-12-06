import { useState } from "react";



export const GameBoard = ({ onselectSquare, board }) => {
  
  return (
    <ol id="game-board">
      {board.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button
                  onClick={() => onselectSquare(rowIndex, colIndex)}
                  disabled={playerSymbol !== null}
                >
                  {playerSymbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
};

//key can be identifed in the unique way.
//update object state Immutably: Object & Arrays(which technically are object) are reference values in js.
//You should therefore not mature them directly - instead create a deep copy first.
