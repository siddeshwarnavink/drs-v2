import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import TruckStatusPreview from './TruckStatusPreview';

configure({ adapter: new Adapter() });

describe('component: <TruckStatusPreview />', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(
            <TruckStatusPreview status="status" label="label" />
        );
    });

    it('should render a status correctly', () => {
        expect(wrapper.find('span.status')).toHaveLength(1);
        expect(wrapper.find('span.status').text()).toEqual('status');
    });

    it('should render a label correctly', () => {
        expect(wrapper.find('span.label')).toHaveLength(1);
        expect(wrapper.find('span.label').text()).toEqual('label');
    });
});