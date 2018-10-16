export const getWeatherRequest = (country, city) => ({
  type: 'GET_WEATHER_REQUEST',
  payload: { country, city},
});

export const getWeatherSuccess = data => ({
  type: 'GET_WEATHER_SUCCESS',
  payload: { data },
});

export const getWeatherError = () => ({
  type: 'GET_WEATHER_ERROR',
});

