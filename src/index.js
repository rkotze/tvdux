import React, { Component } from 'react';
import { render } from 'react-dom';
import DuxLayout from './layouts/layout';

class TvDux extends Component {
  render() {
    return (
      <DuxLayout>
      	<ul className="show-list">
      		<li>
      			<h2>Show name A</h2>
      		</li>
      		<li>
      			<h2>Show name B</h2>
      		</li>
      	</ul>
      </DuxLayout>
    );
  }
}

render(<TvDux />, document.getElementById('tvdux-app'));

export default TvDux;