import React from 'react';
import { ChanelsScreen,  NewWorkspaceScreen, WorkspacesScreen } from './Screens';
import { Routes, Route } from 'react-router-dom';




function App() {
  return (
 
      <Routes>
        <Route path="/" element={<WorkspacesScreen />} />
        <Route path="/workspaces/:workspaceID/:channelID" element={<ChanelsScreen />} />
        <Route path="/workspaces/new" element={<NewWorkspaceScreen />} />
      </Routes>
 
  )
}


export default App
