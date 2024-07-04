import React from 'react';

function Contacto( { nombre, thumbnail, ultima_conexion, id, mensajes} ) {
    return (
        <div key={id} className={`mensaje ${nombre}`}>
        <p className="mensaje-texto"><strong>{nombre}</strong></p>

        </div> 
    );
}

export default Contacto;