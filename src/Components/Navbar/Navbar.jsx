import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" style={{ flexGrow: 1 }}>
                    <Link to="/">Small Eventz</Link>
                </Typography>
                <Button component={Link} to="/explore" color="inherit">Explore</Button>
                <Button component={Link} to="/profiles" color="inherit">Profiles</Button>
                <Button component={Link} to="/Map" color="inherit">Map</Button>
                <Button component={Link} to="/login" color="inherit">Login</Button>
                <Button component={Link} to="/signup" color="inherit">Signup</Button>
                
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;