'use strict'
import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';
import { fetchScheduleReducer as tv } from '../fetch-schedule/fetch-schedule.reducer';

const rootReducer = combineReducers({
  tv,
  routing
});

export default rootReducer;