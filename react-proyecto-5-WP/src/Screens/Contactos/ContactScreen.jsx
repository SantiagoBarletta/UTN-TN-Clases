import React from 'react';
import './ContactScreen.css';
import { ContactosHeader, ListaContactos, ContactosFooter } from '../../Componets';

function ContactScreen() {
    return (
        <div className="contact-screens">
            <ContactosHeader />
            <ListaContactos contactos={contactos} />
            <ContactosFooter />
      </div>
    );
}

export default ContactScreen;