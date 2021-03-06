import { fetchScheduleReducer } from './fetch-schedule.reducer';

describe('Fetch schedule reducer to build the next state', () => {
  it('should have an initial state', () => {
    let initialState = fetchScheduleReducer(undefined, {type:null});
    initialState.should.deepEqual({schedule:[]});
  });

  it('should have a loading state', () => {
    let loadingState = fetchScheduleReducer(undefined, {type: 'loading/schedule'});
    loadingState.should.deepEqual({ loadingState: 'LOADING', schedule: [] });
  });

  it('should have a succesful state', () => {
    let showAndEpisodes = [{name: 'episode_name', show:[{name: 'someshow'}]}];
    let successfulState = fetchScheduleReducer(undefined, {type: 'successful/schedule', schedule: showAndEpisodes});
    successfulState.should.deepEqual({loadingState: 'COMPLETED', schedule: showAndEpisodes});
  });
});