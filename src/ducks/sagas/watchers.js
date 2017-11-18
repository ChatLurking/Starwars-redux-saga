import { takeEvery } from 'redux-saga/effects';
import { CHARACTER_NEW_ID } from '../characterContainer/actions';
import { getCharacterSaga } from '../characterContainer/saga';

export function* watchCharacterSagaAsync() {
  yield takeEvery(CHARACTER_NEW_ID, getCharacterSaga);
}
