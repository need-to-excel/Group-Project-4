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
      <CardActionArea component="a" href="#">
        <Card sx={{ display: 'flex' }}>
          <CardContent sx={{ flex: 1 }}>
            <Typography component="h2" variant="h5">
              Exercise Group
            </Typography>
            <Typography variant="subtitle1" color="text.secondary">
              London
            </Typography>
            <Typography variant="subtitle1" paragraph>
              Come and meet your local neighbours.
            </Typography>
          </CardContent>
        </Card>
      </CardActionArea>

      <CardActionArea component="b" href="#">
        <Card sx={{ display: 'flex' }}>
          <CardContent sx={{ flex: 1 }}>
            <Typography component="h2" variant="h5">
              {title}
            </Typography>
            <Typography variant="subtitle1" color="text.secondary">
              {city}
            </Typography>
            <Typography variant="subtitle1" paragraph>
              {description}
            </Typography>
          </CardContent>
        </Card>
      </CardActionArea>
    <Map />
    </Grid>
  );
}

export default Explore;