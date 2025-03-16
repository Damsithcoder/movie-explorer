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
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(0)
  const [currentFilters, setCurrentFilters] = useState({})
  const [loading, setLoading] = useState(false)

  const API_KEY = import.meta.env.VITE_TMDB_API_KEY
  const BASE_URL = 'https://api.themoviedb.org/3'

  useEffect(() => {
    fetchMovies()
  }, [])

  const fetchMovies = async (filters = {}, page = 1, append = false) => {
    try {
      setLoading(true)
      let endpoint = `${BASE_URL}/movie/now_playing`
      let params = {
        api_key: API_KEY,
        language: filters.language || 'en-US',
        page: page,
      }

      // If there's a search query, use the search endpoint
      if (filters.query) {
        endpoint = `${BASE_URL}/search/movie`
        params = {
          ...params,
          query: filters.query,
        }
      }

      // Add region filter if country is selected
      if (filters.country) {
        params.region = filters.country
      }

      // Add genre filter if selected
      if (filters.genre) {
        endpoint = `${BASE_URL}/discover/movie?`
        params.with_genres = filters.genre
      }

      const response = await axios.get(endpoint, { params })
      let newMovies = response.data.results
      setTotalPages(response.data.total_pages)

      // Filter by duration if specified
      if (filters.duration) {
        // Fetch detailed info for each movie to get runtime
        const movieDetails = await Promise.all(
          newMovies.slice(0, 10).map(async (movie) => {
            try {
              const detailResponse = await axios.get(`${BASE_URL}/movie/${movie.id}`, {
                params: { api_key: API_KEY }
              })
              return { ...movie, runtime: detailResponse.data.runtime }
            } catch (error) {
              console.error(`Error fetching details for movie ${movie.id}:`, error)
              return { ...movie, runtime: 0 }
            }
          })
        )

        newMovies = movieDetails.filter(movie => {
          switch (filters.duration) {
            case 'short':
              return movie.runtime < 90
            case 'medium':
              return movie.runtime >= 90 && movie.runtime <= 120
            case 'long':
              return movie.runtime > 120
            default:
              return true
          }
        })
      }

      setMovies(append ? [...movies, ...newMovies] : newMovies)
      setCurrentPage(page)
      setCurrentFilters(filters)
    } catch (error) {
      console.error('Error fetching movies:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleSearch = (filters) => {
    setMovies([])
    setCurrentPage(1)
    fetchMovies(filters, 1)
  }

  const handleLoadMore = () => {
    if (currentPage < totalPages && !loading) {
      fetchMovies(currentFilters, currentPage + 1, true)
    }
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

        {movies.length > 0 && currentPage < totalPages && (
          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4, mb: 4 }}>
            <Button
              variant="contained"
              onClick={handleLoadMore}
              disabled={loading}
            >
              {loading ? 'Loading...' : 'Load More'}
            </Button>
          </Box>
        )}
      </Container>

      <SignUpModal
        open={isSignUpOpen}
        onClose={() => setIsSignUpOpen(false)}
      />
    </div>
  )
}

export default App
