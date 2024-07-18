import React, { useState } from 'react';
import './WorkspacesScreen.css';
import { ContactosHeader, WorkspacesList, ContactosFooter  } from '../../Componets';


function WorkspacesScreen() {
    const [search, setSearch] = useState('');

    const handleSearchChange = (value) => {
      setSearch(value);
    }
    return (
        <div className="contact-screens">
            <ContactosHeader search={search} onSearchChange={handleSearchChange} />
            <WorkspacesList />
            <ContactosFooter />
      </div>
    );
}

export default WorkspacesScreen;
