export const CHARACTER_INIT_DATA = 'Character/INIT_DATA';
export const CHARACTER_ERROR = 'Character/ERROR';
export const CHARACTER_NEW_ID = 'Character/NEW_ID';

export const initData = () => ({
  type: CHARACTER_INIT_DATA,
});

export const error = data => ({
  type: CHARACTER_ERROR,
  data,
});

export const newId = data => ({
  type: CHARACTER_NEW_ID,
  data,
});
