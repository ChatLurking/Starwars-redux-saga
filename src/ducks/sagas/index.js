import { all } from 'redux-saga/effects';
import { watchCharacterSagaAsync, watchPlanetSaga } from './watchers';

export default function* startForman() {
  yield all([watchCharacterSagaAsync(), watchPlanetSaga()]);
}
