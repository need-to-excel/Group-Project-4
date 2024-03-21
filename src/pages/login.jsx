import React, { useState } from 'react';
import { Typography, TextField, Button, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const Login = () => {
  const [usernameOrEmail, setUsernameOrEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Initialize useNavigate hook

  const handleSubmit = (event) => {
    event.preventDefault();
 
    const storedUserData = localStorage.getItem('userData');
    if (storedUserData) {
      const userData = JSON.parse(storedUserData);
      if (userData.username === usernameOrEmail || userData.email === usernameOrEmail) {
        if (userData.password === password) {
          console.log('Login successful');
          // Navigate to profile page after successful login
          navigate('/profile');
          return;
        }
      }
    }
    console.log('Login failed');
  };

  return (
    <Grid container spacing={2} justifyContent="center">
      <Grid item xs={12}>
        <Typography variant="h4">Login</Typography>
      </Grid>
      <Grid item xs={12}>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Username or Email"
            variant="outlined"
            fullWidth
            value={usernameOrEmail}
            onChange={(e) => setUsernameOrEmail(e.target.value)}
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
            Login
          </Button>
        </form>
      </Grid>
    </Grid>
  );
};

export default Login;