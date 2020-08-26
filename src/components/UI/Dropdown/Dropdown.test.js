import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Dropdown from './Dropdown';
import BackGestureDetector from '../../Transparent/BackGestureDetector/BackGestureDetector';

configure({ adapter: new Adapter() });

describe('component: <Dropdown />', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(
            <Dropdown
                options={[
                    {
                        label: 'option 1',
                        onClick: () => { }
                    }
                ]}
            >
                <h1>Hello</h1>
            </Dropdown>
        );
    });

    it('should render the children components', () => {
        expect(wrapper.find('h1')).toHaveLength(1);
    });

    it('should render two html div tag', () => {
        expect(wrapper.find('div')).toHaveLength(2);
    });

    it('should render a html anchor tag', () => {
        expect(wrapper.find('a')).toHaveLength(1);
    });

    it('should not a <BackGestureDetector /> if it is visible', () => {
        wrapper.setProps({ __defaultIsVisibe: true });
        expect(wrapper.find(BackGestureDetector)).toHaveLength(1);
    });
});