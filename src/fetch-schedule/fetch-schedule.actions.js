import superagent from 'superagent';
const SCHEDULE_END_POINT = 'http://api.tvmaze.com/schedule?country=GB';

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

export const getSchedule = () => {
  return (dispatch) => {
    dispatch(loadingSchedule());
    superagent
      .get(SCHEDULE_END_POINT)
      .end((error, response) => {
        if(response && response.ok){
          dispatch(successfullyGotSchedule(response.body));
        }
      });
  };
};