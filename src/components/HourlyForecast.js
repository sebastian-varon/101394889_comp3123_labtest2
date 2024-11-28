// src/components/HourlyForecast.js
import React from 'react';
import { Box, Card, CardContent, Typography } from '@mui/material';

const HourlyForecast = ({ hourlyForecast, darkMode }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        overflowX: 'auto',
        gap: 2,
        padding: 2,
        marginTop: 3,
      }}
    >
      {hourlyForecast.map((hour, index) => (
        <Card
          key={index}
          sx={{
            minWidth: 120,
            textAlign: 'center',
            padding: 1,
            backgroundColor: darkMode ? '#424242' : '#f0f8ff',
          }}
        >
          <CardContent>
            <Typography variant="body2" sx={{ fontSize: 12 }}>
              {new Date(hour.dt_txt).getHours()}:00
            </Typography>
            <img
              src={`http://openweathermap.org/img/wn/${hour.weather[0].icon}.png`}
              alt="hourly-icon"
              style={{ width: '50px', height: '50px' }}
            />
            <Typography variant="body2" sx={{ fontSize: 12 }}>
              {hour.main.temp.toFixed(1)} °C
            </Typography>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
};

export default HourlyForecast;