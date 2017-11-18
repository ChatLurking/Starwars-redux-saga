import { call, put, select } from 'redux-saga/effects';
import { getCharacterData } from '../../StarwarsAPI';
import { CHARACTER_INIT_DATA, CHARACTER_ERROR } from './actions';

export function* getCharacterSaga(data) {
  try {
    const charData = yield call(getCharacterData, data.data);
    yield put({ type: CHARACTER_INIT_DATA, charData });
  } catch (error) {
    yield put({ type: CHARACTER_ERROR, error });
  }
}
