import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  return (
    <header >
      <h2>Logo</h2>
      <div className='menu'>
        <NavLink to="/" className="nav-link">Home</NavLink>
        <NavLink to="/carrito" className="nav-link">Ir al carrito</NavLink>
        <NavLink to="/contacto" className="nav-link">Ir al contacto</NavLink>
      </div>
    </header>

  )
}

export default Navbar