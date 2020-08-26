import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import TruckStatusData from './TruckStatusData';
import TruckStatusPreview from '../TruckStatusPreview/TruckStatusPreview';

configure({ adapter: new Adapter() });

describe('component: <TruckStatusData />', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(
            <TruckStatusData />
        );
    });

    it('should render a <TruckStatusPreview />', () => {
        expect(wrapper.find(TruckStatusPreview)).toHaveLength(1);
    });
});