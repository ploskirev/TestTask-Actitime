import Vue from 'vue';
import Vuex from 'vuex';
import router from '../router';
import firebase from 'firebase/app';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    currentUser: null,
    firebaseError: '',
    emailForSignUp: '',
    sliderTopics: [
      {
        id: '1',
        heading: 'First Feature',
        text: 'Little Red Cap opened her eyes and when she saw the sunbeams dancing to and fro through the trees and how the ground was covered with beautiful flowers.',
        isNew: false
      },
      {
        id: '2',
        heading: 'Second Feature',
        text: 'Each time she picked one she thought that she could see an even more beautiful one a little way off, and she ran after it, going further and further into the woods.',
        isNew: false
      },
      {
        id: '3',
        heading: 'Third Feature',
        text: 'The wolf pressed the latch, and the door opened. He stepped inside, went straight to the grandmother\'s bed, and ate her up.',
        isNew: false
      },
      {
        id: '4',
        heading: 'Fourth Feature',
        text: 'Little Red Cap had run after the flowers. After she had gathered so many that she could not carry any more, she remembered her grandmother.',
        isNew: true
      }
    ]
  },
  getters: {
    user: function(state) {
      return state.currentUser;
    },
    topics: function(state) {
      return state.sliderTopics;
    },
    topicById: function(state) {
      return function(id) {
        return state.sliderTopics.find(topic => topic.id === id);
      }
    },
    emailFSU: function(state) {
      return state.emailForSignUp;
    },
    error: function(state) {
      return state.firebaseError;
    },
  },
  mutations: {
    setEmailFSU: function(state, email) {
      state.emailForSignUp = email;
    },
    setUser: function(state, user) {
      state.currentUser = user;
    },
    clearUser: function(state) {
      state.currentUser = null;
    },
    setError: function(state, error) {
      state.firebaseError = error;
      console.log(state);
    },
    clearError: function(state) {
      state.firebaseError = '';
    }
  },
  actions: {
    login: async function({commit}, {email, password}) {
      try {
        await firebase.auth().signInWithEmailAndPassword(email, password);
        commit('ClearError');
        commit('setUser', firebase.auth().currentUser.email);
      } catch (err) {
        console.log(err);
        commit('setError', err.message);
      }
    },
    logout: async function({commit}) {
      try {
        await firebase.auth().signOut();
        commit('ClearError');
        commit('clearUser');
      } catch (err) {
        console.log(err);
        commit('setError', err.message);
      }
    },
    register: async function({commit}, {email, password}) {
      try {
        await firebase.auth().createUserWithEmailAndPassword(email, password);
        commit('ClearError');
        commit('setUser', firebase.auth().currentUser.email);
        router.push('/login');
      } catch (err) {
        console.log(err);
        commit('setError', err.message);
      }
    }
  },
  modules: {
  }
})
