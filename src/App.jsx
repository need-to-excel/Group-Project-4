
import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Explore from './pages/explore';
import Profile from './pages/profile';
import Events from './pages/events';
import Home from './pages/home';
import Login from './pages/login';
import Signup from './pages/signup';

function App() {
    const [loggedIn, setLoggedIn] = useState(false);

    const handleLogin = () => {

        setLoggedIn(true);
    };

    const handleLogout = () => {

        setLoggedIn(false);
    };

    return (
        <BrowserRouter>
            <Navbar loggedIn={loggedIn} onLogout={handleLogout} />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/explore" element={<Explore />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/events" element={<Events />} />
                <Route path="/login" element={<Login onLogin={handleLogin} />} />
                <Route path="/signup" element={<Signup onSignup={handleLogin} />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;