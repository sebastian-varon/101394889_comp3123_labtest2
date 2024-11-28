// src/components/Header.js
import React from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

const Header = ({ darkMode, setDarkMode }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 3,
      }}
    >
      <Typography
        variant="h4"
        textAlign="center"
        sx={{ fontWeight: 'bold', color: '#000000' }}
      >
        Weather App
      </Typography>
      <IconButton
        onClick={() => setDarkMode(!darkMode)}
        sx={{ marginLeft: 2 }}
      >
        {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
      </IconButton>
    </Box>
  );
};

export default Header;
