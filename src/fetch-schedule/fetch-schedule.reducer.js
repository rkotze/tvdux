import { LOADING_SCHEDULE, LOADING_STATES, SUCCESSFUL_SCHEDULE } from './fetch-schedule.actions';
let initalState = {
  schedule: []
};

export const fetchScheduleReducer = (state = initalState, action) => {
  switch (action.type) {
    case LOADING_SCHEDULE:
      return Object.assign({}, state, {
        loadingState: LOADING_STATES.LOADING,
        schedule: []
      });
    case SUCCESSFUL_SCHEDULE: 
      return Object.assign({}, state, {
        loadingState: LOADING_STATES.COMPLETED,
        schedule: action.schedule
      });
    default:
      return state;
  }
};