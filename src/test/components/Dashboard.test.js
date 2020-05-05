import React from 'react';
import { shallow } from 'enzyme';
import Dashboard from '../../components/Dashboard';
import toJSON from 'enzyme-to-json';

test('should render dashboard page correctly', () => {
    const wrapper = shallow(<Dashboard />);
    expect(toJSON(wrapper)).toMatchSnapshot();
})
