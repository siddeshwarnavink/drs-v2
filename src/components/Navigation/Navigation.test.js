import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Navigation from './Navigation';
import NavigationItem from './NavigationItem/NavigationItem';

configure({ adapter: new Adapter() });

describe('component: <Navigation />', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(
            <Navigation />
        );
    });

    it('should render three <NavigationItem />', () => {
        expect(wrapper.find(NavigationItem)).toHaveLength(3);
    });
});