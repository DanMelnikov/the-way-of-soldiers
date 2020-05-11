import Vue from 'vue';
import Vuex from 'vuex';
import mutations from './mutations';
import actions from './actions';

Vue.use(Vuex);

export const state = () => {
  return {
    heroes: [],
    isLoading: false
  }
};

export { mutations, actions };