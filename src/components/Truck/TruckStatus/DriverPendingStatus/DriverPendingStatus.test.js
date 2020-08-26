import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import DriverPendingStatus from './DriverPendingStatus';
import IconStatus from '../IconStatus/IconStatus';

configure({ adapter: new Adapter() });

describe('component: <DriverPendingStatus />', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(
            <DriverPendingStatus />
        );
    });

    it('should render a <IconStatus />', () => {
        expect(wrapper.find(IconStatus)).toHaveLength(1);
    });
});