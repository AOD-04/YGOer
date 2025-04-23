import React from "react";

export function HintText({ hints }) {
  if (!hints.length) return null;
  return (
    <div>
      <h3>Hints:</h3>
      {hints.map((hint, idx) => (
        <div key={idx}><strong>Hint {idx + 1}:</strong> {hint}</div>
      ))}
    </div>
  );
}