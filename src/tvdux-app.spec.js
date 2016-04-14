import React from 'react';
import TvDux from './tvdux-app';
import { mount } from 'enzyme';
import sinon from 'sinon';
import shouldSinon from 'should-sinon';

describe('Given a web user navigates to TVdux', () => {
  context('When they arrive on the home page', () => {
    it('Then they should see a list of tv shows', () => {
      let app = mount(<TvDux />);
      let showListTotal = app.find('.show-list-item').length;
      showListTotal.should.be.above(1);
    });

    it('Then TVdux requests a list of latest shows', () => {
      let app = mount(<TvDux />),
      didMount = sinon.spy(TvDux.prototype, 'componentDidMount'),
      getShows = sinon.spy();

      didMount.should.be.calledOnce();
      getShows.should.be.calledOnce();
    });
  });

});