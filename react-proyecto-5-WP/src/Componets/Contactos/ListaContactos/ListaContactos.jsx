import React from 'react';
import MOOK_CONTACTOS from '../../../mensajeria.json';
import Contacto from '../Contacto/Contacto';
const ListaContactos = ({contactos}) => {
    const { nombre, thumbnail, ultima_conexion, id, mensajes} = contactos;

    return (
        <div>
           {contactos.map((contact) => (
        <Mensaje key={id} nombre={nombre} thumbnail={contact.thumbnail}/> ))}
        </div>
    );
};

export default ListaContactos;