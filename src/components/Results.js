import React from "react";

export default function Results ({ card, isCorrect, showResult, onNext }) {
  if (!showResult || !card) return null;
  return (
    <div>
      {isCorrect ? (
        <p> Youre Right! </p>
      ) : (
        <p> Out of hints! The card was <strong>{card.name}</strong>.</p>
      )}
      <img src= "https://db.ygoprodeck.com/api/v7/cardinfo.php" alt={card.name} style={{ maxWidth: "300px" }} />
      <button onClick={onNext}>Next Card</button>
    </div>
  );
}