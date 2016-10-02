import React from 'react';
import { TvDux, TvDuxList } from './tvdux-app';
import { mount } from 'enzyme';
import sinon from 'sinon';
import shouldSinon from 'should-sinon';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';

describe('Given a web user navigates to TVdux', () => {
  context('When they arrive on the home page', () => {
    let getScheduleSpy, fakeStore;
    const fakeScheduleObject = [
      {name:'episode a', show:{name:"some tv show a"}},
      {name:'episode b', show:{name:"some tv show b"}},
    ];
    before(() => {
      getScheduleSpy = sinon.spy();
      fakeStore = createStore(combineReducers({tv: () => ''}));
      sinon.stub(fakeStore, 'dispatch');
    });

    afterEach(() => {
      getScheduleSpy.reset();
    });

    after(() => {
      fakeStore.dispatch.restore();
    });

    it('Then they should see a list of tv episodes and shows', () => {
      let app = mount(<TvDuxList getSchedule={getScheduleSpy} schedule={fakeScheduleObject} />);
      let showListTotal = app.find('.show-list-item').length;
      showListTotal.should.be.above(1);
    });

    it('Then TVdux requests a list of latest episodes', () => {
      let didMountSpy = sinon.spy(TvDuxList.prototype, 'componentDidMount');

      mount(<TvDuxList getSchedule={getScheduleSpy} />);

      didMountSpy.should.be.calledOnce();
      getScheduleSpy.should.be.calledOnce();
    });

    it('Then get schedule dispatches a "get schedule" action', () => {
      const tvDux = mount(<Provider store={fakeStore}><TvDux /></Provider>);
      const firstTvDuxList = tvDux.find(TvDuxList).first();

      fakeStore.dispatch.should.be.calledOnce();
      fakeStore.dispatch.should.be.calledWith(sinon.match.func);
      firstTvDuxList.should.have.prop('getSchedule');
    });
  });
});