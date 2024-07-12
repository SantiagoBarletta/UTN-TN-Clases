import React  from 'react';
import './FormBusquedaContactos.css';
import { ArrowLeft } from 'react-bootstrap-icons';
function FormBusquedaContactos({ search, onSearchChange }) {
  const handleChange = (e) => {
    // Llama a onSearchChange para actualizar el estado en el componente padre
    if (typeof onSearchChange === 'function') {
      onSearchChange(e.target.value);
    } else {
      console.error('onSearchChange no es una función');
    }
  }

  return (
    <>

    <form className="form-busqueda">
      <input
        type="text"
        placeholder="Buscar..."
        onChange={handleChange}
        value={search}
      />
    </form>
    </>
  );
}

export default FormBusquedaContactos;
