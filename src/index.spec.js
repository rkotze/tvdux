import should from 'should';
import React from 'react';
import TvDux from './index';
import { mount } from 'enzyme';

describe('Given a web user navigates to TVdux', () => {
  context('When they arrive on the home page', () => {
    it('Then they should see a list of tv shows', () => {
      let app = mount(<TvDux />);
      let showListTotal = app.find('.show-list li').length;
      showListTotal.should.be.above(1);
    });
  })
});