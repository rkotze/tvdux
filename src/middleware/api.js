import superagent from 'superagent';
import { loadingSchedule, successfullyGotSchedule } from '../fetch-schedule/fetch-schedule.actions';

const SCHEDULE_END_POINT = 'http://api.tvmaze.com/schedule?country=GB';

export default () => {
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