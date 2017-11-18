const buildCharacter = data => {
  if (data && data.name) {
    return {
      name: data.name || null,
      height: data.height || null,
      mass: data.mass || null,
      hairColor: data.hair_color || null,
      skinColor: data.skin_color || null,
      eyeColor: data.eye_color || null,
      birthYear: data.birth_year || null,
      gender: data.gender || null,
      homeworld: data.homeworld || null,
    };
  }
  return {};
};

const buildPlanetData = data => {
  if (data && data.name) {
    return {
      name: data.name || null,
      rotationPeriod: data.rotation_period || null,
      orbitalPeriod: data.orbital_period || null,
      diameter: data.diameter || null,
      climate: data.climate || null,
      gravity: data.gravity || null,
      terrain: data.terrain || null,
      surfaceWater: data.surface_water || null,
      population: data.population || null,
    };
  }
  return {};
};

export const getCharacterData = searchQuery => {
  const endpoint = `https://swapi.co/api/people/${searchQuery}/`;
  return fetch(endpoint)
    .then(response => response.json())
    .then(json => buildCharacter(json));
};

export const getPlanetData = searchQuery => {
  const endpoint = `https://swapi.co/api/planets/${searchQuery}/`;
  return fetch(endpoint)
    .then(response => response.json())
    .then(json => buildPlanetData(json));
};
