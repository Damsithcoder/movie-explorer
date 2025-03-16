import React from 'react';
import { Card, CardContent, CardMedia, Typography, Button } from '@mui/material';
import '../styles/MovieCard.css';

const MovieCard = ({ movie }) => {
  const imageUrl = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : 'https://via.placeholder.com/500x750?text=No+Image+Available';

  return (
    <Card className="movie-card">
      <CardMedia
        component="img"
        height="300"
        image={imageUrl}
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
        {movie.runtime > 0 && (
          <Typography variant="body2" color="text.secondary">
            Duration: {movie.runtime} min
          </Typography>
        )}
        
        <Button
          variant="contained"
          color="primary"
          className="watch-button"
          href={`https://www.themoviedb.org/movie/${movie.id}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          More Info
        </Button>
      </CardContent>
    </Card>
  );
};

export default MovieCard;
