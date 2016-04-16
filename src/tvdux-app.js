'use strict';
import React, { Component } from 'react';
import DuxLayout from './layouts/layout';

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

export default TvDuxList;