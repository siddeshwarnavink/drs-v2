import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Toolbar from './Toolbar';

configure({ adapter: new Adapter() });

describe('component: <Toolbar />', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(
            <Toolbar
                logo={<h1>content</h1>}
            >
                <p>content</p>
            </Toolbar>
        );
    });

    it('should render the children component(s)', () => {
        expect(wrapper.find('p')).toHaveLength(1);
    });

    it('should render the logo children component(s)', () => {
        expect(wrapper.find('h1')).toHaveLength(1);
    });
});