import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import TripStartedLocation from './TripStartedLocation';

configure({ adapter: new Adapter() });

describe('component: <TripStartedLocation />', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(
            <TripStartedLocation
                label="From"
                timestamp="Aug 18, 03:46 pm"
                location="ARIZONA"
            />
        );
    });

    it('should render a label correctly', () => {
        expect(wrapper.find('span.label')).toHaveLength(1);
        expect(wrapper.find('span.label').text()).toEqual('From');
    });

    it('should render a timestamp correctly', () => {
        expect(wrapper.find('span.time')).toHaveLength(1);
        expect(wrapper.find('span.time').text()).toEqual('Aug 18, 03:46 pm');
    });

    it('should render a location correctly', () => {
        expect(wrapper.find('span.location')).toHaveLength(1);
        expect(wrapper.find('span.location').text()).toEqual('ARIZONA');
    });
});