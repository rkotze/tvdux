import React from 'react';
import TvDux from './tvdux-app';
import { mount } from 'enzyme';
import sinon from 'sinon';
import shouldSinon from 'should-sinon';

describe('Given a web user navigates to TVdux', () => {
  context('When they arrive on the home page', () => {
    let getShowsSpy;
    before(() => {
      getShowsSpy = sinon.spy();
    });

    afterEach(() => {
      getShowsSpy.reset();
    });

    it('Then they should see a list of tv shows', () => {
      let app = mount(<TvDux getShows={getShowsSpy} />);
      let showListTotal = app.find('.show-list-item').length;
      showListTotal.should.be.above(1);
    });

    it('Then TVdux requests a list of latest shows', () => {
      let didMountSpy = sinon.spy(TvDux.prototype, 'componentDidMount');

      mount(<TvDux getShows={getShowsSpy} />);

      didMountSpy.should.be.calledOnce();
      getShowsSpy.should.be.calledOnce();
    });
  });

});