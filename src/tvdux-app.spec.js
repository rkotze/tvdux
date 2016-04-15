import React from 'react';
import TvDux from './tvdux-app';
import { mount } from 'enzyme';
import sinon from 'sinon';
import shouldSinon from 'should-sinon';

describe('Given a web user navigates to TVdux', () => {
  context('When they arrive on the home page', () => {
    let dispatch;
    before(() => {
      dispatch = sinon.spy();
    });

    afterEach(() => {
      dispatch.reset();
    });

    after(() => {
      dispatch.restore();
    });

    it('Then they should see a list of tv shows', () => {
      let app = mount(<TvDux dispatch={dispatch} />);
      let showListTotal = app.find('.show-list-item').length;
      showListTotal.should.be.above(1);
    });

    it('Then TVdux requests a list of latest shows', () => {
      let didMount = sinon.spy(TvDux.prototype, 'componentDidMount');

      mount(<TvDux dispatch={dispatch} />);

      didMount.should.be.calledOnce();
      dispatch.should.be.calledOnce();
      dispatch.should.be.calledWith({type: 'GET_SHOWS'});
    });
  });

});