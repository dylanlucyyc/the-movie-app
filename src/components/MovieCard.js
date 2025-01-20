import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import { ListItem, List, ListItemText } from "@mui/material";

export default function MovieCard({ movie, genres }) {
  const style = {
    py: 0,
    width: "100%",
    backgroundColor: "background.paper",
  };

  return (
    <Card sx={{ maxWidth: 300, width: "100%", borderRadius: 0 }}>
      <CardMedia
        component="img"
        alt={movie.original_title}
        height="auto"
        image={`https://image.tmdb.org/t/p/w300/${movie.backdrop_path}`}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {movie.title}
        </Typography>
        <Typography
          variant="body2"
          sx={{
            color: "text.secondary",
            display: "-webkit-box",
            overflow: "hidden",
            WebkitBoxOrient: "vertical",
            WebkitLineClamp: 3,
            mb: 1,
          }}
        >
          {movie.overview}
        </Typography>
        <List sx={style}>
          <Divider component="li" />
          <ListItem sx={{ padding: 0 }}>
            <ListItemText secondary={`Release: ${movie.release_date}`} />
          </ListItem>
          <Divider component="li" />
          <ListItem sx={{ padding: 0 }}>
            <ListItemText
              secondary={`Rating (Vote Average): ${movie.vote_average} (${movie.vote_count} votes)`}
            />
          </ListItem>
          <Divider component="li" />
          <ListItem sx={{ padding: 0 }}>
            <ListItemText secondary={`Popularity: ${movie.popularity}`} />
          </ListItem>
          <Divider component="li" />
          <ListItem sx={{ padding: 0 }}>
            <ListItemText
              secondary={`Genres: ${
                genres
                  ? movie.genre_ids
                      .map(
                        (id) => genres.find((genre) => genre.id === id)?.name
                      )
                      .filter(Boolean)
                      .join(", ")
                  : ""
              }`}
            />
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
