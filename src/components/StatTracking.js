import React from "react";

export default function ScoreTracker({ correctCount, incorrectCount }) {
  return (
    <div>
      <p>Correct: {correctCount} | Incorrect: {incorrectCount}</p>
    </div>
  );
}