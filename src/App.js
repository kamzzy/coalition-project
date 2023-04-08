import React from 'react';
import { Route, Routes } from "react-router-dom"
import Home from "./Views/Home"
import History from "./Views/History"
import Team from "./Views/Team"

function App() {
  return (
   <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/history" element={<History />} />
      <Route path="/team" element={<Team />} />
    </Routes>
  );
}

export default App;
