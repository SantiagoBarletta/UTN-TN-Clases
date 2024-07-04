import React from 'react';
import './ContactScreen.css';
import { ContactosHeader, Contactos, ContactosFooter } from '../../Componets';

function ContactScreen() {
    return (
        <div className="contact-screens">
            <ContactosHeader />
            <Contactos />
            <ContactosFooter />
      </div>
    );
}

export default ContactScreen;