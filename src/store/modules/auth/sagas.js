import {all, takeLatest, call, put} from 'redux-saga/effects';
import {Alert} from 'react-native';
import api from '~/services/api';

import {signInSuccess, signFailure} from './actions';

export function* signIn({payload}) {
  try {
    const {courierId} = payload;

    const response = yield call(api.get, `couriers/${courierId}`);

    const courier = response.data;

    if (!courier) {
      Alert.alert('Sign in error', 'Courier ID not found');

      yield put(signFailure());
      return;
    }

    yield put(signInSuccess(courier));
  } catch (error) {
    Alert.alert('Authentication failed', 'Please check your ID');

    yield put(signFailure());
  }
}
export default all([takeLatest('@auth/SIGN_IN_REQUEST', signIn)]);
