import React from 'react'
import { connect } from 'react-redux'
import getVisibleExpenses from '../selectors/expenses'
import getTotalSum from '../selectors/expense-total'
import numeral from 'numeral'
import { Link } from 'react-router-dom'

const ExpenseSummary=(props)=>{
    const formattedTotal=numeral(getTotalSum(props.expenses)/100).format('$0,0.00');
    return (
        <div className="page-header">
            <div className="content-container">
                <h1 className="page-header__title">Viewing <span>{props.expenses.length}</span> expenses totaling <span>{formattedTotal}</span></h1>
                <div className="page-header__actions">
                 <Link className="button" to="/create">Add Expense</Link>
                </div>
            </div>
        </div>
    )
}

const mappingStateToProps=(state)=>(
    {
        expenses:getVisibleExpenses(state.expenses,state.filters)
    }
)
export default connect(mappingStateToProps)(ExpenseSummary);