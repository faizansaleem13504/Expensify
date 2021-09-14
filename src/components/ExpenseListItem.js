import React from 'react'
import { Link } from 'react-router-dom'
const ExpenseListItem=(props)=>{
    return (
        <div>
    <p>{props.expense.desc} {props.expense.amount} {props.expense.createdAt}</p>
    <Link to={`/Edit/${props.expense.id}`}>Edit Expense</Link>
    </div>
    )
}
export default ExpenseListItem;
