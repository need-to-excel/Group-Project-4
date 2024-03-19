import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Events from './pages/Events/Events';
import Explore from './pages/Explore/Explore';

function App() {
  return (
        <Routes>
          <Route path="/" element={<Events />} />
        </Routes>
  );
}

export default App;