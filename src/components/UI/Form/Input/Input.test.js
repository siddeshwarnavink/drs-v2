import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Input from './Input';

configure({ adapter: new Adapter() });

describe('component: <Input />', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(
            <Input></Input>
        );
    });

    it('should render a input type number if type is set as number', () => {
        wrapper.setProps({ type: 'number' });
        expect(wrapper.find('input[type="number"]')).toHaveLength(1);
    });
});