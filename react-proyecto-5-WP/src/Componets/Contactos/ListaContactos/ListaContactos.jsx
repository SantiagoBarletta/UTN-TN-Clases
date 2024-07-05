import React from 'react';
import Contacto from '../Contacto/Contacto';

import './ListaContactos.css';

const ListaContactos = ({ contactos }) => {
    return (
        <div className="contact-list">
           {contactos.map((contact) => (
               <Contacto key={contact.id} contacto={contact} />
           ))}
        </div>
    );
};

export default ListaContactos;
