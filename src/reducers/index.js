import { combineReducers } from 'redux'
import { fetchScheduleReducer as tv } from '../fetch-schedule/fetch-schedule.reducer';

export default combineReducers({
  tv
});