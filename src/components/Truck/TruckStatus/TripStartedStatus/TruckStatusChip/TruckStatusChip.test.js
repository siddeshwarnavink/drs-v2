import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import TruckStatusChip from './TruckStatusChip';

configure({ adapter: new Adapter() });

describe('component: <TruckStatusChip />', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(
            <TruckStatusChip icon="icon" value="value" />
        );
    });

    it('should render a icon correctly', () => {
        expect(wrapper.find('span.material-icons')).toHaveLength(1);
        expect(wrapper.find('span.material-icons').text()).toEqual('icon');
    });

    it('should render a value correctly', () => {
        expect(wrapper.find('span.label')).toHaveLength(1);
        expect(wrapper.find('span.label').text()).toEqual('value');
    });
});