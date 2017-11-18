import { createSelector } from 'reselect';

const selectPlanet = () => state => state.planet;

const selectId = () =>
  createSelector(selectPlanet(), planetState => planetState.get('id'));

const selectCharData = () =>
  createSelector(selectPlanet(), planetState =>
    planetState.get('planetData').toJS()
  );

export { selectPlanet, selectId, selectCharData };
