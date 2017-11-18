export const PLANET_INIT_DATA = 'Planet/INIT_DATA';
export const PLANET_ERROR = 'Planet/ERROR';
export const PLANET_NEW_ID = 'Planet/NEW_ID';

export const initData = () => ({
  type: PLANET_INIT_DATA,
});

export const error = data => ({
  type: PLANET_ERROR,
  data,
});

export const newId = data => ({
  type: PLANET_NEW_ID,
  data,
});
