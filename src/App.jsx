import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Explore from './pages/explore';
import Profile from './pages/profile';
import Events from './pages/events.jsx';
import Home from './pages/home';
import Login from './pages/login';
import Signup from './pages/signup';

function App() {
    // State variable to track login status
    const [loggedIn, setLoggedIn] = useState(false);

    // Function to toggle login status
    const toggleLogin = () => {
        setLoggedIn(!loggedIn);
    };

    return (
        <>
            {/* Pass the loggedIn state variable to the Navbar component */}
            <Navbar loggedIn={loggedIn} />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/explore" element={<Explore />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/events" element={<Events />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
            </Routes>
        </>
    );
}

export default App;