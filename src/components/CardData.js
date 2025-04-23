import React from "react";

export default function CardData ({card}) {
    if (!card) return null;
    return(
        <ul>
            <li>Card Type:</li>
            <li>ATK:</li>
            <li>DEF:</li>
            <li>Level/Rank:</li>
            <li>Attribute:</li>
        </ul>
    )
}