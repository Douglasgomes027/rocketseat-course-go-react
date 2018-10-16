import { all, takeLatest } from 'redux-saga/effects';

import { getWeather } from './weather';

export default function* rootSaga() {
  yield all([takeLatest('GET_WEATHER_REQUEST', getWeather)]);
}
