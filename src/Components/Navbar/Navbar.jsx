
import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Navbar = ({ loggedIn, onLogout }) => {
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" style={{ flexGrow: 1 }}>
                    <Link to="/">Small Eventz</Link>
                </Typography>
                {loggedIn ? (
                    <>
                        <Button component={Link} to="/explore" color="inherit">Explore</Button>
                        <Button component={Link} to="/profile" color="inherit">Profile</Button>
                        <Button component={Link} to="/events" color="inherit">Events</Button>
                        <Button onClick={onLogout} color="inherit">Logout</Button>
                    </>
                ) : (
                    <>
                        <Button component={Link} to="/explore" color="inherit">Explore</Button>
                        <Button component={Link} to="/login" color="inherit">Login</Button>
                        <Button component={Link} to="/signup" color="inherit">Signup</Button>
                    </>
                )}
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
