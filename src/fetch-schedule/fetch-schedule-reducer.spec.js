import sinon from 'sinon';
import shouldSinon from 'should-sinon';
import superagent from 'superagent';
import { getSchedule } from './fetch-schedule.reducer';
import { loadingSchedule } from './fetch-schedule.actions';

describe('Get a list of scheduled tv shows', () => {
  let getRequestStub, dispatchSpy;
  before(() => {
    getRequestStub = sinon.stub(superagent, 'get').returns({
      end: function(cb) {
        return this;
      }
    });
    dispatchSpy = sinon.spy();
  });

  after(() => {
    getRequestStub.restore();
  });

  it('call getSchedule to make api request', () => {
    getSchedule()(() => {});
    getRequestStub.should.be.calledOnce();
    getRequestStub.should.be.calledWith('http://api.tvmaze.com/schedule?country=GB');
  });

  it('should dispatch a loading state action', () => {
    getSchedule()(dispatchSpy);

    dispatchSpy.should.be.calledWith(loadingSchedule());
  });
});