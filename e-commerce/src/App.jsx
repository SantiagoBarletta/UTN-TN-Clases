import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Home, Carrito, Contacto, Detalle } from './Pages'
import Navbar from './Componentes/Navbar/Navbar'

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Carrito" element={<Carrito/>} />
        <Route path="/Contacto" element={<Contacto/>} />
        <Route path="/Detalle" element={<Detalle/>} />
        <Route path="/detalle/:productId" element={<Detalle/>} />

      </Routes>
      </>
  )
}

export default App
