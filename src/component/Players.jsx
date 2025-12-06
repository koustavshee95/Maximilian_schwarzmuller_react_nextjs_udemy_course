import { useState } from "react";

export const Players = ({ initialName, symbol, isActive,onChangeName }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setplayerName] = useState(initialName);

  const handleButton = (e) => {
    setIsEditing((Editing) => !Editing);
    if (isEditing) {
      onChangeName(symbol, playerName);
    }
    
  };

  const handlePlayerName = (event) => {
    setplayerName(event.target.value);
  };
  let editabePlayerName = <span className="player-name">{playerName}</span>;

  if (isEditing) {
    editabePlayerName = (
      <input type="text" value={playerName} onChange={handlePlayerName} />
    );
  }
  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {editabePlayerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleButton}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
};

//note: Updating state based on your previous state : If your new sate depends on your previous state do not update like that : setIsEditing(!isEditing); instead  you have to  Pass a function to your state updting function. This function will automatically be called by react and will receive the guaranted latest state value.

//setIsEditing(wasEditing=>!wasEditing)

//<input type="text" value={playerName} onChange={handlePlayerName} /> This way listing to change on The input and feeding back updated value into the input is also called two way binding, because we are getting a value out of this input.
