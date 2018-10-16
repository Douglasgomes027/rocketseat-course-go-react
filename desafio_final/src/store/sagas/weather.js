import { call, put } from 'redux-saga/effects';
import api from '../../services/api';

import { getWeatherSuccess, getWeatherError } from '../actions/weather';

const API_KEY ='e5fc1bde853c8c0331714064bf294712'

export function* getWeather(action) {
  try {

    const { data } = yield call(api.get, `weather?q=${action.payload.country}&APPID=${API_KEY}`);

    const weatherData = {
      temperature: data.main.temp,
      city:data.name,
      country:data.sys.country,
      humidity:data.main.humidity,
      description:data.weather[0].description,
    };
    console.log(weatherData)
    yield put(getWeatherSuccess(weatherData));
  } catch (err) {
    yield put(getWeatherError());
  }
}
