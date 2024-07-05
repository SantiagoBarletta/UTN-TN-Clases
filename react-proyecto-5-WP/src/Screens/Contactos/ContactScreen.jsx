import React from 'react';
import './ContactScreen.css';
import { ContactosHeader, ListaContactos, ContactosFooter } from '../../Componets';
import MOOK_CONTACTOS from '../../mensajeria.json';

function ContactScreen() {
    return (
        <div className="contact-screens">
            <ContactosHeader />
            <ListaContactos contactos={MOOK_CONTACTOS} />
            <ContactosFooter />
      </div>
    );
}

export default ContactScreen;
