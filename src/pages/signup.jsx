import React, { useState } from 'react';
import { Typography, TextField, Button, Grid } from '@mui/material';

import { useNavigate, } from "react-router-dom";
import { createProfile } from "../Components/Profile/profiles_fn";

const Signup = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
   
    const userData = { username, email, password };
    localStorage.setItem('userData', JSON.stringify(userData));
    console.log('Signup form submitted:', userData);

    try {
      const profile = await createProfile(); 
      navigate(`/profiles/${profile.id}/edit`); 
    } catch (error) {
      console.error('Error creating profile:', error);//      
    }
  };

  return (
    <Grid container spacing={2} justifyContent="center">
      <Grid item xs={12}>
        <Typography variant="h4">Sign Up</Typography>
      </Grid>
      <Grid item xs={12}>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Username"
            variant="outlined"
            fullWidth
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            label="Password"
            variant="outlined"
            type="password"
            fullWidth
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button type="submit" variant="contained" color="primary">
            Sign Up
          </Button>
        </form>
      </Grid>
    </Grid>
  );
};

export default Signup;
