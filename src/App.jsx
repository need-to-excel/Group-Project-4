import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Signup from './pages/signup';
import Login from './pages/login';
import Explore from './pages/explore';
import './App.css';
import Home from './pages/home';

function App() {
  return (

    <div>
      <Navbar />
      <div className="content">

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/explore" element={<Explore />} />
        </Routes>

      </div>
    </div>
  );
}

export default App;