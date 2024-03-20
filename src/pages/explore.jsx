import './../assets/css/explore.css';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import Map from './../Components/Map/Map';

function Explore() {
  function toggleGetData() {
    const title = JSON.parse(localStorage.getItem("titleKey"));
    const city = JSON.parse(localStorage.getItem("cityKey"));
    const description = JSON.parse(localStorage.getItem("descriptionKey"));
    }

    const title = JSON.parse(localStorage.getItem("titleKey"));
    const city = JSON.parse(localStorage.getItem("cityKey"));
    const description = JSON.parse(localStorage.getItem("descriptionKey"));

  toggleGetData()

  return (
    <Grid item xs={12} md={6}>
      <div id="events-section">
        <Card class="cards" sx={{ display: 'flex' }}>
          <CardContent sx={{ flex: 1 }}>
            <Typography component="h2" variant="h5">
              Exercise Group
            </Typography>
            <Typography variant="subtitle1" paragraph>
              Come and meet your local neighbours.
            </Typography>
            <Typography variant="subtitle1" color="text.secondary">
              London
            </Typography>
          </CardContent>
        </Card>

        <Card class="cards" sx={{ display: 'flex' }}>
          <CardContent sx={{ flex: 1 }}>
            <Typography component="h2" variant="h5">
              {title}
            </Typography>
            <Typography variant="subtitle1" paragraph>
              {description}
            </Typography>
            <Typography variant="subtitle1" color="text.secondary">
              {city}
            </Typography>
          </CardContent>
        </Card>
        </div>
    <Map id="map" />
    </Grid>
  );
}

export default Explore;