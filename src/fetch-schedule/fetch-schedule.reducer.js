import { LOADING_SCHEDULE, LOADING_STATES, SUCCESSFUL_SCHEDULE } from './fetch-schedule.actions';
let initalState = {
  shows: []
};

export const fetchScheduleReducer = (state = initalState, action) => {
  switch (action.type) {
    case LOADING_SCHEDULE:
      return Object.assign({}, state, {
        loadingState: LOADING_STATES.LOADING,
        shows: []
      });
    case SUCCESSFUL_SCHEDULE: 
      return Object.assign({}, state, {
        loadingState: LOADING_STATES.COMPLETED,
        shows: action.shows
      });
    default:
      return state;
  }
};