import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
// import fetchSearchGiphys from './util/api_util';
import { receiveSearchGiphys, fetchSearchGiphys } from './actions/giphy_actions';

document.addEventListener('DOMContentLoaded', () => {
  window.fetchSearchGiphys = fetchSearchGiphys;
  window.receiveSearchGiphys = receiveSearchGiphys;
  const store = configureStore();
  window.store = store;
  ReactDOM.render(<Root store={store}/>, document.getElementById('root'));
});
