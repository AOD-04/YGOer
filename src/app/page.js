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
}