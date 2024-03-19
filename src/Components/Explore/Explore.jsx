import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

export default function MultiActionAreaCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          alt="event"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Event Name
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Event Description
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Join Event
        </Button>
      </CardActions>
    </Card>
  );
}