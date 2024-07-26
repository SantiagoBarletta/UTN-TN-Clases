import React, { useState } from "react";
import { ChanelsHeader, Chanels, ChanelsAside } from "../../Componets";
import "./ChanelsScreen.css";

function ChanelsScreens() {
  const [search, setSearch] = useState('');

  return (
    <div className="chanels-screens">
      <ChanelsHeader search={search} setSearch={setSearch} />
      <main className="chanels-main">
        <ChanelsAside />
        <Chanels search={search} />
      </main>
    </div>
  );
}

export default ChanelsScreens;
