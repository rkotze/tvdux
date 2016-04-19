import sinon from 'sinon';
import shouldSinon from 'should-sinon';
import superagent from 'superagent';

describe('Get a list of tv shows', () => {
  let getRequestStub;
  before(() => {
    getRequestStub = sinon.stub(superagent, 'get');
  });

  it('call get shows action to make api request', () => {
    getRequestStub.returns({
      end: function(err, response) {
        return this;
      }
    });
    
    getShows();
    getRequestStub.should.be.calledOnce();
    getRequestStub.should.be.calledWith('http://api.tvmaze.com/schedule?country=GB');
  });
});