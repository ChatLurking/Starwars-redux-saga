import { PLANET_INIT_DATA, PLANET_ERROR, PLANET_NEW_ID } from './actions';
import { fromJS } from 'immutable';

const initState = fromJS({
  id: 0,
  planetData: {
    name: null,
    rotationPeriod: null,
    orbitalPeriod: null,
    diameter: null,
    climate: null,
    gravity: null,
    terrain: null,
    surfaceWater: null,
    population: null,
  },
  error: null,
});

const PlanetReducer = (state = initState, action) => {
  switch (action.type) {
    case PLANET_INIT_DATA:
      if (action.planetData && action.planetData.name) {
        return state
          .setIn(['planetData', 'name'], action.planetData.name)
          .setIn(
            ['planetData', 'rotationPeriod'],
            action.planetData.rotationPeriod
          )
          .setIn(
            ['planetData', 'orbitalPeriod'],
            action.planetData.orbitalPeriod
          )
          .setIn(['planetData', 'diameter'], action.planetData.diameter)
          .setIn(['planetData', 'climate'], action.planetData.climate)
          .setIn(['planetData', 'gravity'], action.planetData.gravity)
          .setIn(['planetData', 'terrain'], action.planetData.terrain)
          .setIn(['planetData', 'surfaceWater'], action.planetData.surfaceWater)
          .setIn(['planetData', 'population'], action.planetData.population);
      }
      return state;
    case PLANET_NEW_ID:
      return state.set('id', action.data);
    case PLANET_ERROR:
      return state.set('error', action.error);
    default:
      return state;
  }
};

export default PlanetReducer;
