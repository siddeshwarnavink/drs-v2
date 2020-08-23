import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Button from './Button';

configure({ adapter: new Adapter() });

describe('component: <App />', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(
            <Button>
                <span>content.</span>
            </Button>
        );
    });

    it('should render a html button', () => {
        expect(wrapper.find('button')).toHaveLength(1);
    });

    it('should render the inner content(s)', () => {
        expect(wrapper.find('span')).toHaveLength(1);
    });

    it('should display "Loading..." when prop loading is set to true', () => {
        wrapper.setProps({ loading: true });
        expect(wrapper.text()).toEqual('Loading...')
    });
});