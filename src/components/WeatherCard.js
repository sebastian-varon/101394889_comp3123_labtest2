// src/components/WeatherCard.js
import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';
import { motion } from 'framer-motion';

const WeatherCard = ({ weatherData, darkMode }) => {
  return (
    <Card
      component={motion.div}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      sx={{
        marginTop: 3,
        backgroundColor: darkMode ? '#424242' : '#f0f8ff',
        color: darkMode ? '#ffffff' : '#000000',
        boxShadow: 3,
      }}
    >
      <CardContent>
        <Typography variant="h5" textAlign="center" sx={{ color: 'inherit' }}>
          {weatherData.name}, {weatherData.sys.country}
        </Typography>
        <Typography
          variant="body1"
          textAlign="center"
          sx={{ textTransform: 'capitalize', marginBottom: 2, color: 'inherit' }}
        >
          {weatherData.weather[0].description}
        </Typography>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: 2,
          }}
        >
          <img
            src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
            alt="weather-icon"
          />
        </Box>
        <Typography variant="h6" textAlign="center" sx={{ color: 'inherit' }}>
          Temperature: {weatherData.main.temp.toFixed(1)} °C
        </Typography>
        <Typography
          variant="body2"
          textAlign="center"
          sx={{ color: 'inherit', fontSize: '14px' }}
        >
          Humidity: {weatherData.main.humidity}% | Wind Speed:{' '}
          {weatherData.wind.speed} m/s
        </Typography>
      </CardContent>
    </Card>
  );
};

export default WeatherCard;
