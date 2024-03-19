import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Signup from './Components/Pages/Signup';
import Home from './Components/Pages/Home';
import Login from './Components/Pages/Login';
import Explore from './Components/Pages/Explore';
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" component={<Home />} />
            <Route path="/signup" component={<Signup />} />
            <Route path="/login" component={<Login />} />
            <Route path="/explore" component={<Explore />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;