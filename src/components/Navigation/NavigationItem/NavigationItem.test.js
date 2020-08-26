import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import NavigationItem from './NavigationItem';

configure({ adapter: new Adapter() });

jest.mock('react-router-dom');

describe('component: <NavigationItem />', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(
            <NavigationItem label="Label" icon="test" to="/"></NavigationItem>
        );
    });

    it('should render the correct label', () => {
        expect(wrapper.find('span.nav-label').text()).toBe('Label');
    });

    it('should render the correct icon', () => {
        expect(wrapper.find('span.material-icons').text()).toBe('test');
    });
});