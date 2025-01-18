import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import { ListItem, List, ListItemText } from "@mui/material";

export default function MovieCard() {
  const style = {
    py: 0,
    width: "100%",
    backgroundColor: "background.paper",
  };

  return (
    <Card sx={{ maxWidth: 300, width: "100%", borderRadius: 0 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="auto"
        image="https://image.tmdb.org/t/p/w300_and_h450_bestv2/jbOSUAWMGzGL1L4EaUF8K6zYFo7.jpg"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
        <List sx={style}>
          <Divider component="li" />
          <ListItem sx={{ padding: 0 }}>
            <ListItemText secondary="Full width variant below" />
          </ListItem>
          <Divider component="li" />
          <ListItem sx={{ padding: 0 }}>
            <ListItemText secondary="Full width variant below" />
          </ListItem>
          <Divider component="li" />
          <ListItem sx={{ padding: 0 }}>
            <ListItemText secondary="Full width variant below" />
          </ListItem>
          <Divider component="li" />
          <ListItem sx={{ padding: 0 }}>
            <ListItemText secondary="Full width variant below" />
          </ListItem>
          <Divider component="li" />
        </List>
      </CardContent>
      <CardActions>
        <Button size="small">More Details</Button>
        <Button size="small">Play Trailer</Button>
      </CardActions>
    </Card>
  );
}
