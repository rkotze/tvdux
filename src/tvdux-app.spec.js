import React from 'react';
import { TvDux, TvDuxList } from './tvdux-app';
import { mount } from 'enzyme';
import sinon from 'sinon';
import shouldSinon from 'should-sinon';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

describe('Given a web user navigates to TVdux', () => {
  context('When they arrive on the home page', () => {
    let getShowsSpy, fakeStore;
    before(() => {
      getShowsSpy = sinon.spy();
      fakeStore = createStore(() => undefined);
      sinon.stub(fakeStore, 'dispatch');
    });

    afterEach(() => {
      getShowsSpy.reset();
    });

    after(() => {
      fakeStore.dispatch.restore();
    });

    it('Then they should see a list of tv shows', () => {
      let app = mount(<TvDuxList getShows={getShowsSpy} />);
      let showListTotal = app.find('.show-list-item').length;
      showListTotal.should.be.above(1);
    });

    it('Then TVdux requests a list of latest shows', () => {
      let didMountSpy = sinon.spy(TvDuxList.prototype, 'componentDidMount');

      mount(<TvDuxList getShows={getShowsSpy} />);

      didMountSpy.should.be.calledOnce();
      getShowsSpy.should.be.calledOnce();
    });

    it('Then get shows dispatches a "get shows" action', () => {
      mount(<Provider store={fakeStore}><TvDux /></Provider>);
      fakeStore.dispatch.should.be.calledOnce();
      fakeStore.dispatch.should.be.calledWith({ type: 'GET_SHOWS'});
    });
  });

});