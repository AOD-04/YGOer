"use client";
import { useState, useEffect } from "react";
import {CardData} from "./components/CardData";
import {UserGuessing} from "./components/UserGuessing";
import {HintText} from "./components/Hints";
import {ResultDisplay} from "./components/Results";
import {StatTracker} from "./components/StatTracking";


//Below gets a random yugioh card
async function fetchRandomCard() {
  const response = await
  fetch("https://db.ygoprodeck.com/api/v7/randomcard.php")
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

//Below is for handling the users input when they guess
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

  //below is the text that would be displayed on the page
  return (
    <main>
      <h1>YGOer | Welcome to the Yu-gi-Oh Guessing game!</h1>
      <StatTracker correctCount={correctCount} incorrectCount={incorrectCount} />
      <CardData card={card} />
      <HintText card={card} hintsUsed={hintsUsed} />
      <UserGuessing guess={guess}
        setGuess={setGuess}
        onGuess={handleGuess}
        disabled={showResult}
      />
      <ResultDisplay card={card}
        isCorrect={isCorrect}
        showResult={showResult}
        onNext={loadRandomCard}
      />
    </main>
  );

}