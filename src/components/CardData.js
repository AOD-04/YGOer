import React from "react";

export default function CardData({ card }) {
    if (!card) return null;
  
    return (
      <div>
        <h2>Card Stats</h2>
        <ul>
          <li>ATK: {card.atk || "N/A"}</li>
          <li>DEF: {card.def || "N/A"}</li>
          <li>Type: {card.type}</li>
          {card.level && <li>Level/Rank: {card.level}</li>}
          {card.race && <li>Race: {card.race}</li>}
          {card.attribute && <li>Attribute: {card.attribute}</li>}
        </ul>
      </div>
    );
  }
