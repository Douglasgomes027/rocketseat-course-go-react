import { call, put } from 'redux-saga/effects';
import api from '../../services/api';

import { addUserSuccess, addUserError } from '../actions/users';

export function* addUser(action) {
  try {
    const { data } = yield call(api.get, `/users/${action.payload.user}`);

    const userData = {
      id: data.id,
      login: data.login,
      name: data.name,
      avatar: data.avatar_url,
      coords: {
        latitude: action.payload.lat,
        longitude: action.payload.lgt,
      },
    };

    yield put(addUserSuccess(userData));
  } catch (err) {
    yield put(addUserError());
  }
}
