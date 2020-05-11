import {
  LOADING_STARTED,
  LOADING_FINISHED,
  SET_HEROES
} from './mutationTypes';

const options = {
  heroesApi: '/api/heroes',
};

export default {
  getHeroes: async ({ commit }) => {
    commit(LOADING_STARTED);

    try {
      const url = options.heroesApi;
      const response = await fetch(url);
      const data = await response.json();
      
      commit(SET_HEROES, data);
    } catch (error) {
      console.log(error);
    }

    commit(LOADING_FINISHED);
  },
  addHero: async ({ commit }, data) => {
    commit(LOADING_STARTED);

    try {
      const url = `${options.heroesApi}/add`;
      const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json'
        }
      });
    } catch (error) {
      console.log(error);
    }

    commit(LOADING_FINISHED);
  }
}