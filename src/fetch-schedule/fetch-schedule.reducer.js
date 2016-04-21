import { LOADING_SCHEDULE, LOADING_STATES } from './fetch-schedule.actions';
let initalState = {
  shows: []
};

export const fetchScheduleReducer = (state = initalState, action) => {
  switch (action.type) {
    case LOADING_SCHEDULE:
      return Object.assign({}, state, {
        loadingState: LOADING_STATES.LOADING,
        shows: []
      })
    default:
      return state;
  }
};