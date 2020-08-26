import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Card from './Card';

configure({ adapter: new Adapter() });

describe('component: <App />', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(
            <Card>
                <p>content.</p>
            </Card>
        );
    });

    it('should render the inner components', () => {
        expect(wrapper.find('p')).toHaveLength(1);
    });
});