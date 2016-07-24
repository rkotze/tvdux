export const LOADING_SCHEDULE = 'loading/schedule';
export const SUCCESSFUL_SCHEDULE = 'successful/schedule';
export const LOADING_STATES = {
  LOADING: 'LOADING',
  COMPLETED: 'COMPLETED'
};

export const loadingSchedule = () => ({
  type: LOADING_SCHEDULE,
});

export const successfullyGotSchedule = (schedule) => ({
  type: SUCCESSFUL_SCHEDULE,
  schedule
});