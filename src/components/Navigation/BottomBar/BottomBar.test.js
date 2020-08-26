import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import BottomBar from './BottomBar';
import Navigation from '../Navigation';

configure({ adapter: new Adapter() });

describe('component: <BottomBar />', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(
            <BottomBar />
        );
    });

    it('should render the <Navigation />', () => {
        expect(wrapper.find(Navigation)).toHaveLength(1);
    });
});