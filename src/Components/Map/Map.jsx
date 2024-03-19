import { useState, useEffect } from 'react'
// import './App.css'
import MapTool from './Map2'
import Events from './mapinput'
function Map() {
  const [latlon, setlatlon] = useState({lat:0, lon:0});


  function getLatLon (address) {
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + address + "&units=metric&appid=965f5c48346a9c64b82b0d0fc5597889";
    fetch(queryURL)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data);

        var lat = data.coord.lat;
        var lon = data.coord.lon;

        setlatlon({lat:lat, lon:lon});

        console.log("Got lat/lon"); 
      });
  }
  return (
    <>
      <Events getLatLon={getLatLon}/>
      <MapTool latlon={latlon}/>
    </>
  )
}
  
  export default Map;