'use strict';
import React, { Component } from 'react';
import DuxLayout from './layouts/layout';
import { getSchedule } from './fetch-schedule/fetch-schedule.actions';
import { connect } from 'react-redux';

class TvDuxList extends Component {
  constructor(){
    super();
  }

  componentDidMount(){
    this.props.getShows();
  }

  render() {
    return (
      <DuxLayout>
        <ul className="show-list">
          <li className="show-list-item">
            <h2>Show name A</h2>
          </li>
          <li className="show-list-item">
            <h2>Show name B</h2>
          </li>
        </ul>
      </DuxLayout>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    shows: []
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getShows: () => {
      dispatch(getSchedule());
    }
  };
};

const TvDux = connect(mapStateToProps, mapDispatchToProps)(TvDuxList);

export { TvDux, TvDuxList };