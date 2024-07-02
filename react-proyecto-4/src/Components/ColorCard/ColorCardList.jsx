import React from "react";
import { ColorCard } from "./ColorCard";

export const ColorCardList = ({ cards }) => {
  return (
    <div className="cartas">
      {cards.map((card) => (
        <ColorCard key={card.id} card={card} />
      ))}
    </div>
  );
};
