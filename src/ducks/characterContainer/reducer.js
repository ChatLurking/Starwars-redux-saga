import {
  CHARACTER_INIT_DATA,
  CHARACTER_ERROR,
  CHARACTER_NEW_ID,
} from './actions';
import { fromJS } from 'immutable';

const initState = fromJS({
  id: 0,
  charData: {
    name: null,
    height: null,
    mass: null,
    hairColor: null,
    skinColor: null,
    eyeColor: null,
    birthYear: null,
    gender: null,
    homeworld: null,
  },
  error: null,
});

function CharacterReducer(state = initState, action) {
  switch (action.type) {
    case CHARACTER_INIT_DATA:
      if (action.charData && action.charData.name) {
        return state
          .setIn(['charData', 'name'], action.charData.name)
          .setIn(['charData', 'height'], action.charData.height)
          .setIn(['charData', 'mass'], action.charData.mass)
          .setIn(['charData', 'hairColor'], action.charData.hairColor)
          .setIn(['charData', 'skinColor'], action.charData.skinColor)
          .setIn(['charData', 'eyeColor'], action.charData.eyeColor)
          .setIn(['charData', 'birthYear'], action.charData.birthYear)
          .setIn(['charData', 'gender'], action.charData.gender)
          .setIn(['charData', 'homeworld'], action.charData.homeworld)
          .set('error', null);
      }
      return state;
    case CHARACTER_NEW_ID:
      return state.set('id', action.data);
    case CHARACTER_ERROR:
      return state.set('error', action.error);
    default:
      return state;
  }
}

export default CharacterReducer;
