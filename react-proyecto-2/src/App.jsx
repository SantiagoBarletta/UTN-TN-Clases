import React from 'react';
import { ColorCardList } from './Components/ColorCard/ColorCardList';
import Card from './Components/ColorCard/Card.json';

function App() {
  return (
    <div className="cartas">
      <ColorCardList Card={Card} />

    </div>
  )
}


export default App
