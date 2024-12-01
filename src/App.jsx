import React, { useState, useEffect } from 'react'
import { Container, AppBar, Toolbar, Typography, Button, Box, Grid } from '@mui/material'
import MovieCard from './components/MovieCard'
import SearchBar from './components/SearchBar'
import SignUpModal from './components/SignUpModal'
import axios from 'axios'
import './App.css'

function App() {
  const [movies, setMovies] = useState([])
  const [isSignUpOpen, setIsSignUpOpen] = useState(false)

  const API_KEY = import.meta.env.VITE_TMDB_API_KEY
  const BASE_URL = 'https://api.themoviedb.org/3'

  useEffect(() => {
    fetchMovies()
  }, [])

  const fetchMovies = async (filters = {}) => {
    try {
      const response = await axios.get(`${BASE_URL}/movie/now_playing`, {
        params: {
          api_key: API_KEY,
          language: filters.language || 'en-US',
          page: 1,
        }
      })
      setMovies(response.data.results)
    } catch (error) {
      console.error('Error fetching movies:', error)
    }
  }

  const handleSearch = (filters) => {
    fetchMovies(filters)
  }

  return (
    <div className="app">
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Movie Explorer
          </Typography>
          <Button color="inherit" onClick={() => setIsSignUpOpen(true)}>
            Sign Up
          </Button>
        </Toolbar>
      </AppBar>

      <Container maxWidth="lg" sx={{ mt: 4 }}>
        <SearchBar onSearch={handleSearch} />
        
        <Grid container spacing={2} justifyContent="center">
          {movies.map(movie => (
            <Grid item key={movie.id}>
              <MovieCard movie={movie} />
            </Grid>
          ))}
        </Grid>
      </Container>

      <SignUpModal
        open={isSignUpOpen}
        onClose={() => setIsSignUpOpen(false)}
      />
    </div>
  )
}

export default App
