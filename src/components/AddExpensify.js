import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import {addExpense} from '../actions/expenses'
import { withRouter } from 'react-router-dom';

export class AddExpensify extends React.Component {
    onSubmit = (expense)=> {
        this.props.addExpense(expense);
        this.props.history.push('/')
    }

    render() {
        return (
            <div>
            <h1>Add Expense </h1>
            <ExpenseForm 
                onSubmit={this.onSubmit}
            />
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({addExpense: (expense) => dispatch(addExpense(expense))})
export default withRouter(connect(undefined, mapDispatchToProps)(AddExpensify));