import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import DriverAcceptedStatus from './DriverAcceptedStatus';
import IconStatus from '../IconStatus/IconStatus';

configure({ adapter: new Adapter() });

describe('component: <DriverAcceptedStatus />', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(
            <DriverAcceptedStatus />
        );
    });

    it('should render a <IconStatus />', () => {
        expect(wrapper.find(IconStatus)).toHaveLength(1);
    });
});