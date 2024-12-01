import React, { useState } from 'react';
import {
  Modal,
  Box,
  Typography,
  TextField,
  Button,
  IconButton,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import '../styles/SignUpModal.css';

const SignUpModal = ({ open, onClose }) => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add signup logic here
    console.log('Form submitted:', formData);
    onClose();
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Box className="signup-modal">
        <IconButton
          className="close-button"
          onClick={onClose}
          sx={{ position: 'absolute', right: 8, top: 8 }}
        >
          <CloseIcon />
        </IconButton>
        
        <Typography variant="h5" component="h2" className="modal-title">
          Sign Up
        </Typography>

        <form onSubmit={handleSubmit} className="signup-form">
          <TextField
            name="username"
            label="Username"
            variant="outlined"
            fullWidth
            required
            value={formData.username}
            onChange={handleChange}
          />
          
          <TextField
            name="email"
            label="Email"
            type="email"
            variant="outlined"
            fullWidth
            required
            value={formData.email}
            onChange={handleChange}
          />
          
          <TextField
            name="password"
            label="Password"
            type="password"
            variant="outlined"
            fullWidth
            required
            value={formData.password}
            onChange={handleChange}
          />
          
          <TextField
            name="confirmPassword"
            label="Confirm Password"
            type="password"
            variant="outlined"
            fullWidth
            required
            value={formData.confirmPassword}
            onChange={handleChange}
          />

          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            className="submit-button"
          >
            Sign Up
          </Button>
        </form>
      </Box>
    </Modal>
  );
};

export default SignUpModal;
