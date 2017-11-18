import { all } from 'redux-saga/effects';
import { watchCharacterSagaAsync } from './watchers';

export default function* startForman() {
  yield all([watchCharacterSagaAsync()]);
}
