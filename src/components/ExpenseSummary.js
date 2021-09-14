import React from 'React'
import { connect } from 'react-redux'
import getVisibleExpenses from '../selectors/expenses'
import getTotalSum from '../selectors/expense-total'

const ExpenseSummary=(props)=>{
    return (
        <div>
            <p>You have {props.expenses.length} totaling to {getTotalSum(props.expenses)}</p> items
        </div>
    )
}

const mappingStateToProps=(state)=>(
    {
        expenses:getVisibleExpenses(state.expenses,state.filters)
    }
)
export default connect(mappingStateToProps)(ExpenseSummary);