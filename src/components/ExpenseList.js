import React from 'react';
import { connect } from 'react-redux';
import ExpensListItem from './ExpenseListItem';
import SelectExpenses from '../selectors/expenses';

export const ExpenseList = (props) => (
    <div>
        {
            props.expenses.length === 0 ? (
                <p>No Expenses</p>
            ) : (
                props.expenses.map((expense) => {
                    return <ExpensListItem key={expense.id} {...expense} />
                })
            )
        }
    </div>
)

const mapStateToProps = (state) => {
    return {
        expenses: SelectExpenses(state.expenses, state.filters)
    }
}
export default connect(mapStateToProps)(ExpenseList);
