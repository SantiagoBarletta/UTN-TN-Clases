// ChanelsScreens.js

import React, { useState } from "react";
import { ChanelsHeader, Chanels, ChanelsAside } from "../../Componets";
import "./ChanelsScreen.css";

function ChanelsScreens() {
  const [search, setSearch] = useState('');
  const [selectedUser, setSelectedUser] = useState(null);

  return (
    <div className="chanels-screens">
      <ChanelsHeader search={search} setSearch={setSearch} />
      <main className="chanels-main">
        <ChanelsAside onSelectUser={setSelectedUser} />
        <Chanels search={search} selectedUser={selectedUser} />
      </main>
    </div>
  );
}

export default ChanelsScreens;
