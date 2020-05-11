import { 
  LOADING_STARTED,
  LOADING_FINISHED,
  ADD_HERO,
  REMOVE_HERO,
  UPDATE_HERO,
  SET_HEROES
} from './mutationTypes';

export default {
  [LOADING_STARTED]: (state) => {
    state.isLoading = true;
  },
  [LOADING_FINISHED]: (state) => {
    state.isLoading = false;
  },
  [ADD_HERO]: (state, hero) => {
    state.heroes.push(hero);
  },
  [REMOVE_HERO]: (state, id) => {
    state.heroes = state.heroes.filter((hero => hero.id !== id));
  },
  [UPDATE_HERO]: (state, id, hero) => {
    const index = state.heroes.findIndex(hero => hero.id === id);

    if (index !== -1) {
      state.heroes[index] = hero;
    }
  },
  [SET_HEROES]: (state, heroes) => {
    state.heroes = heroes;
  }
};