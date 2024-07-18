import React, { useState } from 'react';
import './WorkspacesScreen.css';
import { WorkspacesHeader, WorkspacesList, ContactosFooter  } from '../../Componets';


function WorkspacesScreen() {
    const [search, setSearch] = useState('');

    const handleSearchChange = (value) => {
      setSearch(value);
    }
    return (
        <div className="contact-screens">
            <WorkspacesHeader />
            <WorkspacesList />
            <ContactosFooter />
      </div>
    );
}

export default WorkspacesScreen;
