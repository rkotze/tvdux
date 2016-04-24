'use strict';
import React, { Component } from 'react';
import core from './core.less';

class DuxLayout extends Component {
  render() {
    return (
      <div className="tvdux-app">
        {this.props.children}
      </div>
    );
  }
}

export default DuxLayout;