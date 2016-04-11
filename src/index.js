import React, { Component } from 'react';
import { render } from 'react-dom';

class TvDux extends Component {
  render() {
    return (
      <div>
        <h1>TV Dux app</h1>
      </div>
    );
  }
}

render(<TvDux />, document.getElementById('tvdux-app'));