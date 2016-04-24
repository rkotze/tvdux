'use strict';
import React from 'react';
import { render } from 'react-dom';
import { TvDux } from './tvdux-app';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';

let store = createStore(reducers, applyMiddleware(thunk));

render(
	<Provider store={store}>
  	<TvDux />
  </Provider>, 
  document.getElementById('tvdux-app'));