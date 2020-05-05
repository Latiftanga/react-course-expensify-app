import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import ExpenseForm from '../components/ExpenseForm';
import { editExpense, removeExpense } from '../actions/expenses';

export class EditExpensify extends React.Component {
    onSubmit = (expense) => {
        this.props.editExpense(this.props.expense.id, expense)
        this.props.history.push('/');
    }

    onRemove = ()=> {
        this.props.removeExpense({ id: this.props.expense.id });
        this.props.history.push('/');
    }

    render() {
        return (
            <div>
                <ExpenseForm onSubmit={this.onSubmit} 
                expense={this.props.expense}
                />
                <button onClick={this.onRemove} >Remove</button> 
            </div>
        );
    }
}

const mapStateToProps = (state, props) => {
    const id = props.match.params.id;
    return {
        expense: state.expenses.find((expense) => expense.id === id),
    }
}
const mapDispatchToProps = (dispatch, props) => ({
    editExpense: (id, expense) => dispatch(editExpense(id, expense)),
    removeExpense: ({id}) => dispatch(removeExpense({id}))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(EditExpensify));