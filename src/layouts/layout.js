'use strict';
import React, { Component } from 'react';

class DuxLayout extends Component {
  render() {
    return (
      <div>
      	<h1>TV Dux</h1>
        {this.props.children}
      </div>
    );
  }
}

export default DuxLayout;