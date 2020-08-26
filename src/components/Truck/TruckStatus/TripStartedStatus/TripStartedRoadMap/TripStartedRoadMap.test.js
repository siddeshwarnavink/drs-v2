import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import TripStartedRoadMap from './TripStartedRoadMap';
import TripStartedLocation from './TripStartedLocation/TripStartedLocation';

configure({ adapter: new Adapter() });

describe('component: <TripStartedRoadMap />', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(
            <TripStartedRoadMap />
        );
    });

    it('should render two <TripStartedLocation />', () => {
        expect(wrapper.find(TripStartedLocation)).toHaveLength(2);
    });
});