import React from "react";
import { connect } from "react-redux";
import ExpenseListItem from "./ExpenseListItem";
import getVisibleExpenses from "../selectors/expenses";

const ExpenseList=(props)=>{
    return (
        <div className="content-container">
            <div className="list-header">
                <div className="show-for-desktop">Expense</div>
                <div className="show-for-desktop">Amount</div>
                <div className="show-for-mobile">Expense</div>
            </div>
        {props.expenses.map((expense)=>{
            return (<ExpenseListItem key={expense.id} expense={expense}/>)
        })
        }
        <p>{props.expenses.length}</p>
        </div>
    )
}


const mappingStateToProps=(state)=>(
    {
        expenses:getVisibleExpenses(state.expenses,state.filters)
    }
)
export default connect(mappingStateToProps)(ExpenseList);