import { fetchScheduleReducer } from './fetch-schedule.reducer';

describe('Fetch schedule reducer to build the next state', () => {
  it('should have an initial state', () => {
    let initialState = fetchScheduleReducer(undefined);
    initialState.should.deepEqual({shows:[]})
  });
});