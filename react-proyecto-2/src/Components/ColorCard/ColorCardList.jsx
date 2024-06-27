import React from "react";
import { ColorCard } from "../ColorCard/ColorCard";

const ColorCardList = ({ Card }) => {

    return (
      <>
      {
        Card.map((Card) => <ColorCard Card={Card} />
        )
      }
      </>
    )
    
  }

  export {ColorCardList}