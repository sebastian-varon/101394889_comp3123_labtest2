import React, { useState, useEffect } from 'react';
import { Container, CssBaseline, TextField } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import ParticlesBackground from './components/ParticlesBackground';
import Header from './components/Header';
import WeatherCard from './components/WeatherCard';
import HourlyForecast from './components/HourlyForecast';
import { fetchWeatherData } from './utils/api';

function App() {
  const [city, setCity] = useState('Toronto');
  const [weatherData, setWeatherData] = useState(null);
  const [hourlyForecast, setHourlyForecast] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [darkMode, setDarkMode] = useState(false);

  const theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
    },
  });

  useEffect(() => {
    fetchWeatherData(city, setWeatherData, setHourlyForecast, setError, setLoading);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div style={{ position: 'relative', overflow: 'hidden' }}>
        <ParticlesBackground />
        <Container maxWidth="sm" sx={{ position: 'relative', zIndex: 2, padding: 5}}>
          <Header darkMode={darkMode} setDarkMode={setDarkMode} />
          <TextField
            label="Enter city name"
            variant="outlined"
            fullWidth
            value={city}
            onChange={(e) => setCity(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') fetchWeatherData(city, setWeatherData, setHourlyForecast, setError, setLoading);
            }}
            sx={{
              marginBottom: 3,
              backgroundColor: darkMode ? '#424242' : '#ffffff',
            }}
          />
          {error && <p style={{ color: 'red' }}>{error}</p>}
          {weatherData && <WeatherCard weatherData={weatherData} darkMode={darkMode} />}
          {hourlyForecast && <HourlyForecast hourlyForecast={hourlyForecast} darkMode={darkMode} />}
        </Container>
      </div>
    </ThemeProvider>
  );
}

export default App;