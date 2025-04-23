import React from "react";

export default function HintText ({card, hintNumber}){
    if (!card || hintNumber == 0) return null;

    const hints = [ `Card Type ${card.type}`, `Level/Rank ${card.level}`, ]
}