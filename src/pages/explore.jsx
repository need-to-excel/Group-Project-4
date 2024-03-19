import React from 'react';
import { Typography, Button, Grid } from '@mui/material';
import { Link } from 'react-router-dom'; 

const Explore = () => {
  
  return (
    <Grid container spacing={2} justifyContent="center">
      <Grid item xs={12}>
        <Typography variant="h4">Explore</Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="body1">Explore various events, activities, and more!</Typography>
      </Grid>
      <Grid item xs={12}>

        <Button component={Link} to="/events" variant="contained" color="primary">
          Explore Now
        </Button>
      </Grid>
    </Grid>
  );
};

export default Explore;


