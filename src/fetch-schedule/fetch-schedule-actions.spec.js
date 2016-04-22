import sinon from 'sinon';
import shouldSinon from 'should-sinon';
import superagent from 'superagent';
import { 
  loadingSchedule, 
  successfullyGotSchedule, 
  getSchedule } from './fetch-schedule.actions';

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

  afterEach(() => {
    dispatchSpy.reset();
    getRequestStub.reset();
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

  it('should dispatch a successful action', () => {
    let amazing = { data: 'amazing'},
    getReturn = {
      end: function(cb) {
        cb(null, {body: amazing, ok: true});
        return this;
      }
    },
    getReturnEndSpy = sinon.spy(getReturn, 'end');
    getRequestStub.returns(getReturn);
    getSchedule()(dispatchSpy);

    getReturnEndSpy.should.be.calledOnce();
    dispatchSpy.should.be.calledWith(successfullyGotSchedule(amazing));
  });
});