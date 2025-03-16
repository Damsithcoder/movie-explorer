import React, { useState, useEffect } from 'react';
import { TextField, Select, MenuItem, FormControl, InputLabel, Box} from '@mui/material';
import axios from 'axios';
import '../styles/SearchBar.css';

const SearchBar = ({ onSearch }) => {
  const [filters, setFilters] = useState({
    query: '',
    language: '',
    country: '',
    duration: '',
    genre: ''
  });

  const [genres, setGenres] = useState([]);

  useEffect(() => {
    const fetchGenres = async () => {
      try {
        const response = await axios.get(`https://api.themoviedb.org/3/genre/movie/list`, {
          params: {
            api_key: import.meta.env.VITE_TMDB_API_KEY,
            language: 'en-US'
          }
        });
        setGenres(response.data.genres);
      } catch (error) {
        console.error('Error fetching genres:', error);
      }
    };

    fetchGenres();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters(prev => ({
      ...prev,
      [name]: value
    }));
    onSearch({ ...filters, [name]: value });
  };
  function close(){
    setFilters(prev => ({
      ...prev,
      query: ''
    }))
    // query=""
    
  }

  return (
    <Box className="search-container">
      <TextField
        name="query"
        label="Search Movies"
        variant="outlined"
        fullWidth
        value={filters.query}
        onChange={handleChange}
        className="search-input"
      />
      <button className="close" onClick={close}>*</button>
      <Box className="filters">
        <FormControl className="filter">
          <InputLabel>Language</InputLabel>
          <Select
            name="language"
            value={filters.language}
            label="Language"
            onChange={handleChange}
          >
            <MenuItem value="">All</MenuItem>
            <MenuItem value="en">English</MenuItem>
            <MenuItem value="es">Spanish</MenuItem>
            <MenuItem value="fr">French</MenuItem>
            <MenuItem value="hi">Hindi</MenuItem>
            <MenuItem value="ja">Japanese</MenuItem>
            <MenuItem value="ko">Korean</MenuItem>
          </Select>
        </FormControl>

        <FormControl className="filter">
          <InputLabel>Country</InputLabel>
          <Select
            name="country"
            value={filters.country}
            label="Country"
            onChange={handleChange}
          >
            <MenuItem value="">All</MenuItem>
            <MenuItem value="US">United States</MenuItem>
            <MenuItem value="IN">India</MenuItem>
            <MenuItem value="GB">United Kingdom</MenuItem>
            <MenuItem value="FR">France</MenuItem>
            <MenuItem value="JP">Japan</MenuItem>
            <MenuItem value="KR">South Korea</MenuItem>
          </Select>
        </FormControl>

        <FormControl className="filter">
          <InputLabel>Duration</InputLabel>
          <Select
            name="duration"
            value={filters.duration}
            label="Duration"
            onChange={handleChange}
          >
            <MenuItem value="">All</MenuItem>
            <MenuItem value="short">Under 90 min</MenuItem>
            <MenuItem value="medium">90-120 min</MenuItem>
            <MenuItem value="long">Over 120 min</MenuItem>
          </Select>
        </FormControl>

        <FormControl className="filter">
          <InputLabel>Genre</InputLabel>
          <Select
            name="genre"
            value={filters.genre}
            label="Genre"
            onChange={handleChange}
          >
            <MenuItem value="">All Genres</MenuItem>
            {genres.map(genre => (
              <MenuItem key={genre.id} value={genre.id}>
                {genre.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
    </Box>
  );
};

export default SearchBar;
