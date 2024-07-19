import React from 'react';
import { ChanelsScreen,  InfoScreen, WorkspacesScreen } from './Screens';
import { Routes, Route } from 'react-router-dom';




function App() {
  return (
 
      <Routes>
        <Route path="/" element={<WorkspacesScreen />} />
         <Route path="/workspaces/:workspaceID" element={<ChanelsScreen />} />
        {/*<Route path="/contactos" element={<ContactScreen />} />
        <Route path="/mensajes/:contactoID" element={<ChatScreens />} />
        <Route path="/contactoInfo/:contactoID" element={<InfoScreen />} /> */}
      </Routes>
 
  )
}


export default App
