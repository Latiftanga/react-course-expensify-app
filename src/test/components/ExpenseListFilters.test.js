import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import { ExpenseListFilters }  from '../../components/ExpenseListFilters';
import { filters, altFilters } from '../fixtures/filters';
import moment from 'moment';

let setTextFilter, setStartDate, setEndDate, sortByDate, sortByAmount, wrapper;

beforeEach(() => {
    setTextFilter = jest.fn()
    setStartDate = jest.fn()
    setEndDate = jest.fn()
    sortByDate = jest.fn()
    sortByAmount = jest.fn()
    wrapper = shallow(
            <ExpenseListFilters
                filters={filters}
                setTextFilter={setTextFilter}
                sortByAmount={sortByAmount}
                sortByDate={sortByDate}
                setStartDate={setStartDate}
                setEndDate={setEndDate}
            />
        )
});

test('should render filters correctly', () => {
    expect(toJSON(wrapper)).toMatchSnapshot()
})
test('should render alt filters correctly', () => {
    wrapper.setProps({
        filters: altFilters
    })
    expect(toJSON(wrapper)).toMatchSnapshot()
})
test('should handle text change', () => {
    const value ='rent';
    wrapper.find('input').simulate('change', {
        target: {value}
    });
    expect(setTextFilter).toHaveBeenLastCalledWith(value);
})
test('should handle sort by date', () => {
    const value ='date';
    wrapper.setProps({ filters: altFilters });
    wrapper.find('select').simulate('change', {
        target: {value}
    });
    expect(sortByDate).toHaveBeenCalled();
});
test('should handle sort by amount', () => {
    const value ='amount';
    wrapper.find('select').simulate('change', {
        target: {value}
    });
    expect(sortByAmount).toHaveBeenCalled();
});
test('should handle date changes', () => {
    const startDate = moment(0).add(4, 'years');
    const endDate = moment(0).add(8, "years");
    wrapper.find('withStyles(DateRangePicker)').prop('onDatesChange')({startDate, endDate});
    expect(setStartDate).toHaveBeenLastCalledWith(startDate);
    expect(setEndDate).toHaveBeenLastCalledWith(endDate);
})
test('should handle date focused change', () => {
    const calendarFocused = 'endDate';
    wrapper.find('withStyles(DateRangePicker)').prop('onFocusChange')(calendarFocused);
    expect(wrapper.state('calendarFocused')).toBe(calendarFocused);
})




