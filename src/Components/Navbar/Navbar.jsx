import React from 'react';
import './../../assets/css/navbar.css';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Navbar = ({ loggedIn }) => {
    return (
        <AppBar className="appbar" position="static">
            <Toolbar className="navbar">
                <Typography variant="h6" style={{ flexGrow: 1 }}>
                    <Link className="main-link" to="/">Small Eventz</Link>
                </Typography>
                {loggedIn ? (
                    <>
                        <Button className="navbar-button" component={Link} to="/explore" color="inherit">Explore</Button>
                        <Button className="navbar-button" component={Link} to="/profile" color="inherit">Profile</Button>
                        <Button className="navbar-button" component={Link} to="/events" color="inherit">Events</Button>
                        <Button className="navbar-button" component={Link} to="/" color="inherit">Logout</Button>
                    </>
                ) : (
                    <>
                        <Button className="navbar-button" component={Link} to="/explore" color="inherit">Explore</Button>
                        <Button className="navbar-button" component={Link} to="/login" color="inherit">Login</Button>
                        <Button className="navbar-button" component={Link} to="/signup" color="inherit">Signup</Button>
                    </>
                )}
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
