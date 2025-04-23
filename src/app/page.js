"use client";

import {useState, useEffect} from "react";

async function fetchRandomCard() {
  const response = await
  fetch("https://db.ygoprodeck.com/api/v7/cardinfo.php")
  const data = await response.json();
  return data;
}

export default function Page() {
  const [card, setCard] = useState(null);
  const [guess, setGuess] = useState("");
  const [hintNumber, setHintNumber] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [correctCount, setCorrectCount] = useState(0);
  const [incorrectCount, setIncorrectCount] = useState(0);

  const loadRandomCard = async () => {
    const newCard = await fetchRandomCard();
    setCard(newCard);
    setGuess("");
    setHintNumber(0);
    setShowResult(false);
  }

  useEffect (() => {
    loadRandomCard();
  }
)

const handleGuess = (e) => {
  e.preventDefault();
  if (!card) return;

    if (!card) return;

    if (guess.trim().toUpperCase() == card.name.toUpperCase()) {
      setIsCorrect(true);
      setShowResult(true);
      setCorrectCount(count => count + 1);
    }
    else if (hintNumber < 3) {
      setHintNumber(hints => 3)
    }
    else {
      setIsCorrect(false);
      setShowResult(true);
      setIncorrectCount(count => count + 1);
    }
  }

  const getHint = () => {
    if (!card) return [];
    const hints = [
      `Card Type: ${card.type}`,
      `Level/Rank: ${card.level || "N/A"}`,
      `Archetype: ${card.archetype || "N/A"}`
    ];
    return hints.slice(0, hintNumber);
  };

  return (
    <main>
      <h1>YGOer - Yu-Gi-Oh! Guessing Game</h1>
      <div>
        <p>Correct: {correctCount} | Incorrect: {incorrectCount}</p>
      </div>
      {card && (
        <div>
          <h2>Guess the Card</h2>
          <ul>
            <li>Card Type: </li>
            <li>ATK: {card.atk}</li>
            <li>DEF: {card.def}</li>
            <li>Type: {card.type}</li>
            <li>Attribute: {card.attribute}</li>
            <li>Level/Rank: </li>
          </ul>
          {getHint().map((hint, idx) => (
            <div key={idx}><strong>Hint {idx+1}:</strong> {hint}</div>
          ))}
          {!showResult && (
            <form onSubmit={handleGuess}>
              <input
                type="text"
                value={guess}
                onChange={e => setGuess(e.target.value)}
                placeholder="Enter card name"
              />
              <button type="submit">Guess</button>
            </form>
          )}
          {showResult && (
            <div>
              {isCorrect ? (
                <p> Correct! The card was <strong>{card.name}</strong>.</p>
              ) : (
                <p> Out of hints! The card was <strong>{card.name}</strong>.</p>
              )}
              <img src={"https://db.ygoprodeck.com/api/v7/cardinfo.php"} alt={card.name} style={{maxWidth: "300px"}} />
              <button onClick={loadRandomCard}>Next Card</button>
            </div>
          )}
        </div>
      )}
    </main>
  );
}