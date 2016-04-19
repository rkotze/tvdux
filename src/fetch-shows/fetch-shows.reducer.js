import superagent from 'superagent';

const SCHEDULE_END_POINT = 'http://api.tvmaze.com/schedule?country=GB';

const getShows = () => {
  return (dispatch) => {
    superagent
      .get(SCHEDULE_END_POINT);
  };
};

export { getShows };