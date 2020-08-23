import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import DriverRejectedStatus from './DriverRejectedStatus';
import IconStatus from '../IconStatus/IconStatus';

configure({ adapter: new Adapter() });

describe('component: <DriverRejectedStatus />', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(
            <DriverRejectedStatus />
        );
    });

    it('should render a <IconStatus />', () => {
        expect(wrapper.find(IconStatus)).toHaveLength(1);
    });
});