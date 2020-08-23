import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import TripStartedStatus from './TripStartedStatus';
import TripStartedRoadMap from './TripStartedRoadMap/TripStartedRoadMap';
import TruckStatusChip from './TruckStatusChip/TruckStatusChip';

configure({ adapter: new Adapter() });

describe('component: <TripStartedStatus />', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(
            <TripStartedStatus />
        );
    });

    it('should render a <TripStartedRoadMap />', () => {
        expect(wrapper.find(TripStartedRoadMap)).toHaveLength(1);
    });

    it('should render three <TruckStatusChip />', () => {
        expect(wrapper.find(TruckStatusChip)).toHaveLength(3);
    });
});