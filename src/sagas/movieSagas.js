import { FETCH_FAILED, FETCH_MOVIES, FETCH_SUCCEEDED } from '../actions/actionTypes'

//SAGA EFECT
import { put, takeLatest } from 'redux-saga/effects'

import { API } from './Api'

function* getMovies() {
  try {
    const recieved = yield API.getMoviesFromApi()
    yield put({
      type: FETCH_SUCCEEDED,
      recievedMovies: recieved
    })
  } catch (err) {
    yield put({
      type: FETCH_FAILED,
      err
    })
  }
}

export function* watchFetchMovies() {
  yield takeLatest(FETCH_MOVIES, getMovies)
}