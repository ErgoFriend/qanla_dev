import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: {},
    timetable: {
      time: {},
      week: {}
    },
    subjects: {}
  },
  mutations: {
    onAuthStateChanged(state, user) {
      state.user = user;
    },
    onTimetableStateChanged(state, timetable) {
      state.timetable = timetable;
    },
    onSubjectsStateChanged(state, subjects) {
      state.subjects = subjects;
    },
    addSubjectsState(state, id, subject) {
      state.subjects[id] = subject;
    }
  },
  getters: {
    user(state) {
      return state.user;
    },
    timetable(state) {
      return state.timetable;
    },
    subjects(state) {
      return state.subjects;
    }
  }
});