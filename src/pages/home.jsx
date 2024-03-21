import React from 'react';
import './../assets/css/home.css';
import { Typography, Button, Grid } from '@mui/material';
import { Link } from 'react-router-dom'; 
import GoogleMapReact from 'google-map-react';

const Home = () => {
  
  return (
    <Grid container spacing={2} justifyContent="center">
      <Grid item xs={12}>
        <Typography className="home-title" variant="h4">Welcome to Small Eventz!</Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography className="bio" variant="body1">
          Small Eventz is your go-to platform for finding social events and meeting new people in your area. Whether you're looking for a jogging partner, group exercise, stand-up comedy, or just someone to hang out with, we've got you covered.
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Button className="home-button" component={Link} to="/explore" variant="contained" color="primary">
          Explore Events
        </Button>
      </Grid>
      <Grid item xs={12} style={{ height: '400px', width: '100%' }}>
        <InteractiveMap />
      </Grid>
    </Grid>
  );
};

const InteractiveMap = () => {
    const events = []; 
    
   
    const mapOptions = {
        center: { lat: 40.7128, lng: -74.0060 }, 
        zoom: 10, 
    };

    return (
        <div className="interactive-map">
            <GoogleMapReact
                bootstrapURLKeys={{ key: 'YKBXDTX4IKSXEOITVZOK' }} 
                defaultCenter={mapOptions.center}
                defaultZoom={mapOptions.zoom}
            >
                {events.map(event => (
                    <Marker key={event.id} lat={event.lat} lng={event.lng} />
                ))}
            </GoogleMapReact>
        </div>
    );
}

export default Home;


