import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Layout from './Layout';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

configure({ adapter: new Adapter() });

describe('hoc: <Layout />', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(
            <Layout>
                <h1>Dummy content</h1>
            </Layout>
        );
    });

    it('should render the children component(s)', () => {
        expect(wrapper.find('h1')).toHaveLength(1);
    });

    it('should render a <Toolbar />', () => {
        expect(wrapper.find(Toolbar)).toHaveLength(1);
    });

    it('should render a <SideDrawer /> if isAuthenticated is true', () => {
        wrapper.setProps({ isAuthenticated: true });
        expect(wrapper.find(SideDrawer)).toHaveLength(1);
    });
});