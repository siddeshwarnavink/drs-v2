import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import ProfilePreviewData from './ProfilePreviewData';
import Dropdown from '../../UI/Dropdown/Dropdown';

configure({ adapter: new Adapter() });

describe('component: <ProfilePreviewData />', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(
            <ProfilePreviewData
                username="test name"
                role="test role"
            >
            </ProfilePreviewData>
        );
    });

    it('should render a <Dropdown />', () => {
        expect(wrapper.find(Dropdown)).toHaveLength(1);
    });

    it('should render a html img', () => {
        expect(wrapper.find('img')).toHaveLength(1);
    });

    it('should render the correct username', () => {
        expect(wrapper.find('span.profile-username').text()).toEqual('test name');
    });

    it('should render the correct role', () => {
        expect(wrapper.find('span.profile-role').text()).toEqual('test role');
    });
});