import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import expenses from '../fixtures/expenses';
import ExpensListItem from '../../components/ExpenseListItem';

test('should render expense list item', () => {
    const wrapper = shallow(<ExpensListItem key={expenses[1].id} {...expenses[1]}/>);
    expect(toJSON(wrapper)).toMatchSnapshot();
})
