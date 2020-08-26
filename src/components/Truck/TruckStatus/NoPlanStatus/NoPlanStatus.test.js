import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import NoPlanStatus from './NoPlanStatus';
import IconStatus from '../IconStatus/IconStatus';

configure({ adapter: new Adapter() });

describe('component: <NoPlanStatus />', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(
            <NoPlanStatus />
        );
    });

    it('should render a <IconStatus />', () => {
        expect(wrapper.find(IconStatus)).toHaveLength(1);
    });
});