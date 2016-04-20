export const LOADING_SCHEDULE = 'loading/schedule';
export const SUCCESSFUL_SCHEDULE = 'successful/schedule';

export const loadingSchedule = () => ({
  type: LOADING_SCHEDULE,
});

export const successfullyGotSchedule = (shows) => ({
  type: SUCCESSFUL_SCHEDULE,
  shows
});