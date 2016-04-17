import sinon from 'sinon';
import shouldSinon from 'should-sinon';
import superagent from 'superagent';

describe('Get a list of tv shows', () => {
  let getRequestSpy;
  before(() => {
    getRequestSpy = sinon.spy(superagent, 'get');
  });

  it('call get shows action to make api request', () => {
    getShows();
    getRequestSpy.should.be.calledOnce();
    getRequestSpy.should.be.calledWith('http://api.tvmaze.com/schedule?country=GB');
  });
});