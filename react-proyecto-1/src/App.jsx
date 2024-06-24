import React from 'react';
import ProductCard from './componentes/ProductCard/ProductCard';
import './componentes/Carrito/Carrito'
import Carrito from './componentes/Carrito/Carrito';
import {PI, doSomething} from './funciones';
function App() {
  console.log(PI);
  doSomething();
  return (
    <div>
      <h1>App</h1>
      <ProductCard />
      <Carrito />
    </div>
  )
}


export default App
