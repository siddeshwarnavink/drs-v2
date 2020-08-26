import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import IconStatus from './IconStatus';

configure({ adapter: new Adapter() });

describe('component: <DriverRejectedStatus />', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(
            <IconStatus icon="icon" label="label" />
        );
    });

    it('should render a icon correctly', () => {
        expect(wrapper.find('span.material-icons')).toHaveLength(1);
        expect(wrapper.find('span.material-icons').text()).toEqual('icon');
    });

    it('should render a label correctly', () => {
        expect(wrapper.find('span.label')).toHaveLength(1);
        expect(wrapper.find('span.label').text()).toEqual('label');
    });
});