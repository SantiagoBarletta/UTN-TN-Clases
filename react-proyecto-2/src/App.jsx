import React from 'react';
import { ColorCard } from './Components/ColorCard';


const Card1 = {
  likes: 3,
  fecha: '1 hour',
  colores: ['#36BA98', '#E9C46A', '#F4A261', '#E76F51'],
}
const Card2 = {
  likes: 132,
  fecha: 'Yesterday',
  colores: ['#667BC6', '#FDFFD2', '#FFB4C2', '#DA7297'],
}
const Card3 = {
  likes: 184,
  fecha: '2 days',
  colores: ['#F5F7F8', '#F4CE14', '#379777', '#45474B'],
}
const Card4 = {
  likes: 416,
  fecha: '3 days',
  colores: ['#071952', '#088395', '#37B7C3', '#EBF4F6'],
}


function App() {
  return (
    <div className="cartas">
      <ColorCard Card={Card1} />
      <ColorCard Card={Card2} />
      <ColorCard Card={Card3} />
      <ColorCard Card={Card4} />
    </div>
  )
}


export default App
