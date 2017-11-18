import { call, put } from 'redux-saga/effects';
import { getPlanetData } from '../../StarwarsAPI';
import { PLANET_INIT_DATA, PLANET_ERROR } from './actions';

export function* getPlanetSaga(data) {
  try {
    const planetData = yield call(getPlanetData, data.data);
    yield put({ type: PLANET_INIT_DATA, planetData });
  } catch (error) {
    yield put({ type: PLANET_ERROR, error });
  }
}
