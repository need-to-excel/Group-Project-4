import green from './../assets/4caf50.png';
import './../assets/css/explore.css';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Map from './../Components/Map/Map';
import CardMedia from '@mui/material/CardMedia';

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
    <Grid color="primary" item xs={12} md={6}>
      <div id="events-section">
        <Card className="card" sx={{ display: 'flex' }}>
        <CardMedia
            component="img"
            sx={{ width: 225, height: 200, display: { xs: 'none', sm: 'block' } }}
            image={green}
          />
          <CardContent sx={{ flex: 1 }}>
            <Typography className="title" component="h2" variant="h5">
              Exercise Group
            </Typography>
            <Typography className="description" variant="subtitle1" paragraph>
              Come and meet your local neighbours.
            </Typography>
            <Typography className="city" variant="subtitle1" color="text.secondary">
              London
            </Typography>
          </CardContent>
        </Card>

        <Card className="card" sx={{ display: 'flex' }}>
        <CardMedia
            component="img"
            sx={{ width: 225, height: 200, display: { xs: 'none', sm: 'block' } }}
            image={green}
          />
          <CardContent sx={{ flex: 1 }}>
            <Typography className="title" component="h2" variant="h5">
              {title}
            </Typography>
            <Typography className="description" variant="subtitle1" paragraph>
              {description}
            </Typography>
            <Typography className="city" variant="subtitle1" color="text.secondary">
              {city}
            </Typography>
          </CardContent>
        </Card>
        </div>
    <Map class="map" />
    </Grid>
  );
}

export default Explore;