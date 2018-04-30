/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

//Redux
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'

import allReducers from './src/reducers'
import MovieContainer from './src/containers/MovieContainer'

//redux saga
import createSagaMiddleware from 'redux-saga'
import rootSaga from './src/sagas/rootSaga'

const sagaMiddleware = createSagaMiddleware()
let store = createStore(allReducers, applyMiddleware(sagaMiddleware))

export default class App extends Component {
  render() {
    return (
      <Provider
        store={store}
      >
        <MovieContainer/>
      </Provider>
    );
  }
}

sagaMiddleware.run(rootSaga)
