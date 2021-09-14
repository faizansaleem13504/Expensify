import React from "react";
import { connect } from "react-redux";
import ExpenseListItem from "./ExpenseListItem";
import getVisibleExpenses from "../selectors/expenses";

const ExpenseList=(props)=>{
    return (
    <div>
        <h1>Expense List</h1>
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