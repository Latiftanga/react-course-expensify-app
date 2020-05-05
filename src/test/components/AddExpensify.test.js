import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import { AddExpensify } from '../../components/AddExpensify';
import expenses from '../fixtures/expenses';

let addExpense, history, wrapper;

beforeEach(() => {
    addExpense = jest.fn();
    history = { push: jest.fn() }
    wrapper = shallow(<AddExpensify addExpense={addExpense} history={history} />);
})
test('should render add expensify page correctly', () => {
    expect(toJSON(wrapper)).toMatchSnapshot();
});
test('should handle form submit', () => {
    expect(toJSON(wrapper)).toMatchSnapshot();
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1]);
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(addExpense).toHaveBeenLastCalledWith(expenses[1])
});

