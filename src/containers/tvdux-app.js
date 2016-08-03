'use strict';
import React, { Component } from 'react';
import DuxLayout from '../layouts/layout';
import getSchedule from '../middleware/api';
import { connect } from 'react-redux';
import listLess from '../layouts/list.less';

class TvDuxList extends Component {
  constructor(){
    super();
  }

  componentWillMount(){
    this.props.getSchedule();
  }

  componentDidMount(){
    this.props.getSchedule();
  }

  render() {
    const { schedule } = this.props;
    return (
      <DuxLayout>
        <h1>Tv Schedule</h1>
        <ul className="show-list">
          {schedule.map((episode, index) => {
            const { image } = episode.show;
            const showImage = image ? <p><img src={image.medium} /></p> : <p className="image-placeholder"></p>;
            return (
              <li key={index} className="show-list-item">
                {showImage}
                <p>Episode: {episode.name}</p>
                <p>Show: {episode.show.name}</p>
              </li>
            )})}
        </ul>
      </DuxLayout>
    );
  }
}

TvDuxList.defaultProps = {
  schedule: [],
  loadingState: null
};

const mapStateToProps = (state) => {
  return {
    schedule: state.tv.schedule || [],
    loadingState: state.tv.loadingState
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getSchedule: () => {
      dispatch(getSchedule());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TvDuxList);