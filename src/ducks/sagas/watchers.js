import { takeEvery } from 'redux-saga/effects';
import { CHARACTER_NEW_ID } from '../characterContainer/actions';
import { getCharacterSaga } from '../characterContainer/saga';
import { PLANET_NEW_ID } from '../planetContainer/actions';
import { getPlanetSaga } from '../planetContainer/saga';

export function* watchCharacterSagaAsync() {
  yield takeEvery(CHARACTER_NEW_ID, getCharacterSaga);
}

export function* watchPlanetSaga() {
  yield takeEvery(PLANET_NEW_ID, getPlanetSaga);
}
