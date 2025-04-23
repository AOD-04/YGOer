import React from "react";

export default function StatTracker({ correctCount, incorrectCount }) {
  return (
    <div>
      <p>Correct: {correctCount} | Incorrect: {incorrectCount}</p>
    </div>
  );
}