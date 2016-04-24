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
    this.props.getSchedule();
  }

  render() {
    const { schedule } = this.props;
    return (
      <DuxLayout>
        <ul className="show-list">
          {schedule.map((episode) => (
              <li className="show-list-item">
                <p>Episode: {episode.name}</p>
                <p>Show: {episode.show.name}</p>
              </li>
            ))}
        </ul>
      </DuxLayout>
    );
  }
}

TvDuxList.defaultProps = {
  schedule: []
};

const mapStateToProps = (state) => {
  return {
    schedule: []
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getSchedule: () => {
      dispatch(getSchedule());
    }
  };
};

const TvDux = connect(mapStateToProps, mapDispatchToProps)(TvDuxList);

export { TvDux, TvDuxList };