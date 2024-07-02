import React, { useState, useEffect } from "react";
import { ColorCardList } from "./Components/ColorCard/ColorCardList";
import { FormularioColor } from "./Components/FormularioColor/FormularioColor";

// Importa el archivo JSON
import Card from "./Components/ColorCard/Card.json";

function App() {
  const [colorCards, setColorCards] = useState([]);

  useEffect(() => {
    setColorCards(Card);
  }, []);

  const handleSubmitNewCard = (event) => {
    event.preventDefault();
    
    const newColorCard = {
      colores: [ ],
      likes: 0,
      fecha: event.target.fecha.value,
      id: Date.now()
    };

    for (let i = 1; i <= 4; i++) {
      newColorCard.colores.push(event.target[`color-${i}`].value);
    }
    setColorCards([...colorCards, newColorCard]);
    event.target.reset();
  };

  return (
    <div className="App">
      <h1>Mis Cartas de Colores</h1>
      <ColorCardList cards={colorCards} />
      <FormularioColor handleSubmitNewCard={handleSubmitNewCard} />
    </div>
  );
}

export default App;
