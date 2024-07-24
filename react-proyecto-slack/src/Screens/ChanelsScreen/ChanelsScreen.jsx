import React, { useState } from "react";
import { ChanelsHeader, Chanels, ChanelsAside } from "../../Componets";
import "./ChanelsScreen.css";

function ChanelsScreens({ }) {


  return (
    <div className="chanels-screens">
      <ChanelsHeader />
      <main className="chanels-main">
        <ChanelsAside />
        <Chanels />
      </main>

    </div>
  );
}
export default ChanelsScreens;
