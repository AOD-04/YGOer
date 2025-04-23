import React from "react";

export default function UserGuessing ({ guess, setGuess, onGuess, disabled }) {
  return (
    <form onSubmit={onGuess}>
      <input type="text" value={guess} onChange={e => setGuess(e.target.value)} 
      placeholder="Enter card name" autoComplete="off" disabled={disabled}/>
      <button type="submit" disabled={disabled}>Guess the Card</button>
    </form>
  );
}