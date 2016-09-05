import React from 'react';
import { shallow } from 'enzyme';
import joinable from 'joinable';

const ComponentX = ({ children, className }) => {
	return (<div className={joinable(className)}>
		{ children }
		</div>);
};

const ShadowX = ({ children }) => {
	return <span>{ children }</span>
};

describe('Given I\'m an enzyme', () => {
  it('render a shallow component', () => {
    const shallowDom = shallow(<ComponentX>Hello</ComponentX>);
    shallowDom.text().should.equal('Hello');
  });

  it('render a shallow component with "shallow" class name', () => {
    const shallowDom = shallow(<ComponentX className="shallow">Hello</ComponentX>);
    shallowDom.hasClass('shallow').should.be.true();
  });

  it('can\'t render a child in shallow component', () => {
    const shallowDom = shallow(<ComponentX>
    	Hello
    	<ShadowX>
    		World
    	</ShadowX>
    	</ComponentX>);
    shallowDom.text().should.equal('Hello<ShadowX />');
  });
});