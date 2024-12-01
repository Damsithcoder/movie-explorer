import React, { useState } from 'react';
import { TextField, Select, MenuItem, FormControl, InputLabel, Box } from '@mui/material';
import '../styles/SearchBar.css';

const SearchBar = ({ onSearch }) => {
  const [filters, setFilters] = useState({
    query: '',
    language: '',
    country: '',
    duration: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters(prev => ({
      ...prev,
      [name]: value
    }));
    onSearch({ ...filters, [name]: value });
  };

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
      </Box>
    </Box>
  );
};

export default SearchBar;
