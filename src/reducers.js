import { combineReducers } from 'redux';
import characterReducer from './ducks/characterContainer/reducer';
import PlanetReducer from './ducks/planetContainer/reducer';

export default function createReducer(asyncReducers) {
  return combineReducers({
    character: characterReducer,
    planet: PlanetReducer,
    ...asyncReducers,
  });
}
