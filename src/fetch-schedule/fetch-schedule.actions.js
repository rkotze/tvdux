export const LOADING_SCHEDULE = 'load/schedule';
export const SUCCESSFUL_SCHEDULE = 'successful/schedule';

export const loadingSchedule = () => ({
  type: LOADING_SCHEDULE,
});

export const successfullyGotSchedule = (response) => ({
  type: SUCCESSFUL_SCHEDULE,
  response
});