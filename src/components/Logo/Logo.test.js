import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Logo from './Logo';

configure({ adapter: new Adapter() });

describe('component: <Logo />', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<Logo />);
    });

    it('should render a image', () => {
        expect(wrapper.find('img')).toHaveLength(1);
    });
});