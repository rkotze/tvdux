import sinon from 'sinon';
import shouldSinon from 'should-sinon';
import superagent from 'superagent';
import { getShows } from './fetch-shows.reducer';

describe('Get a list of tv shows', () => {
  let getRequestStub, dispatchSpy;
  before(() => {
    getRequestStub = sinon.stub(superagent, 'get');
    dispatchSpy = sinon.spy();
  });

  after(() => {
    getRequestStub.restore();
  });

  it('call get shows action to make api request', () => {
    getRequestStub.returns({
      end: function(err, response) {
        return this;
      }
    });

    getShows()(() => {});
    getRequestStub.should.be.calledOnce();
    getRequestStub.should.be.calledWith('http://api.tvmaze.com/schedule?country=GB');
  });
});