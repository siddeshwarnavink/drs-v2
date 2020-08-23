import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import SideDrawer from './SideDrawer';
import Navigation from '../Navigation';

configure({ adapter: new Adapter() });

describe('component: <SideDrawer />', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(
            <SideDrawer />
        );
    });

    it('should render the <Navigation />', () => {
        expect(wrapper.find(Navigation)).toHaveLength(1);
    });
});