import React from 'react';
import { Card, CardContent, CardMedia, Typography, Button } from '@mui/material';
import '../styles/MovieCard.css';

const MovieCard = ({ movie }) => {
  return (
    <Card className="movie-card">
      <CardMedia
        component="img"
        height="300"
        image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
        className="movie-image"
      />
      <CardContent className="movie-content">
        <Typography variant="h6" component="div" className="movie-title">
          {movie.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Release Date: {movie.release_date}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Duration: {movie.runtime} min
        </Typography>
        <Button
          variant="contained"
          color="primary"
          className="watch-button"
          href={`/movie/${movie.id}`}
        >
          Watch Movie
        </Button>
      </CardContent>
    </Card>
  );
};

export default MovieCard;
