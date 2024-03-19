import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Explore from './pages/Explore/Explore';
import Events from './pages/Events/Events';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Events />} />
      </Routes>
    </Router>
  );
}

export default App;