import { combineReducers } from 'redux';
import characterReducer from './ducks/characterContainer/reducer';

export default function createReducer(asyncReducers) {
  return combineReducers({
    character: characterReducer,
    ...asyncReducers,
  });
}
