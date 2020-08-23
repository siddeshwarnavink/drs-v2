import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Form from './Form';

configure({ adapter: new Adapter() });

describe('component: <App />', () => {
    let wrapper, isSubmitted = false;

    beforeEach(() => {
        wrapper = shallow(
            <Form
                onSubmit={() => {
                    isSubmitted = true
                }}
            >
                <p>content.</p>
            </Form>
        );
    });

    it('should render a html form', () => {
        expect(wrapper.find('form')).toHaveLength(1);
    });

    it('should render the inner contents', () => {
        expect(wrapper.find('p')).toHaveLength(1);
    });

    it('should run the onSubmit prop', () => {
        wrapper.find('form').simulate('submit', { preventDefault: () => { } });
        expect(isSubmitted).toBe(true);
    });
});