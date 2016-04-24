import React from 'react';
import { TvDux, TvDuxList } from './tvdux-app';
import { mount } from 'enzyme';
import sinon from 'sinon';
import shouldSinon from 'should-sinon';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

describe('Given a web user navigates to TVdux', () => {
  context('When they arrive on the home page', () => {
    let getScheduleSpy, fakeStore;
    before(() => {
      getScheduleSpy = sinon.spy();
      fakeStore = createStore(() => undefined);
      sinon.stub(fakeStore, 'dispatch');
    });

    afterEach(() => {
      getScheduleSpy.reset();
    });

    after(() => {
      fakeStore.dispatch.restore();
    });

    it('Then they should see a list of tv episodes and shows', () => {
      let app = mount(<TvDuxList getShows={getScheduleSpy} />);
      let showListTotal = app.find('.show-list-item').length;
      showListTotal.should.be.above(1);
    });

    it('Then TVdux requests a list of latest episodes', () => {
      let didMountSpy = sinon.spy(TvDuxList.prototype, 'componentDidMount');

      mount(<TvDuxList getShows={getScheduleSpy} />);

      didMountSpy.should.be.calledOnce();
      getScheduleSpy.should.be.calledOnce();
    });

    it('Then get schedule dispatches a "get schedule" action', () => {
      const tvDux = mount(<Provider store={fakeStore}><TvDux /></Provider>);
      const propsOfTvDuxList = tvDux.find(TvDuxList).first().props();

      fakeStore.dispatch.should.be.calledOnce();
      fakeStore.dispatch.should.be.calledWith(sinon.match.func);
      propsOfTvDuxList.should.have.property('getShows');
    });
  });

});