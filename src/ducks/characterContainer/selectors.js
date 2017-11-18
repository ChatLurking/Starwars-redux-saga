import { createSelector } from 'reselect';

const selectCharacter = () => state => state.character;

const selectId = () =>
  createSelector(selectCharacter(), characterState => characterState.get('id'));

const selectCharData = () =>
  createSelector(selectCharacter(), characterState =>
    characterState.get('charData').toJS()
  );

export { selectCharacter, selectId, selectCharData };
