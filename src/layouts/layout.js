'use strict';
import React, { Component } from 'react';
import core from './core.less';
import normalize from '../css/normalize.css';
import skeleton from '../css/skeleton.css';

class DuxLayout extends Component {
  render() {
    return (
      <div className="tvdux-app container">
        {this.props.children}
      </div>
    );
  }
}

export default DuxLayout;