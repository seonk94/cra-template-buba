import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';

const rootReducer = combineReducers({});

const rootSagas = () => function* () {
  // const sagas = [];

  // for (let i = 0; i < sagas.length; i += 1) {
  //   yield sagas[i];
  // }
};

export default {
  rootReducer,
  rootSagas,
};

export type RootState = ReturnType<typeof rootReducer>
