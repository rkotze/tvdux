import React from 'react';
import { render } from 'react-dom';
import { TvDux } from './tvdux-app';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

let store = createStore(() => '');

render(
	<Provider store={store}>
  	<TvDux />
  </Provider>, 
  document.getElementById('tvdux-app'));