import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { startEditExpense } from '../actions/expenses';
import {startRemoveExpense} from "../actions/expenses"

const Edit = (props) => {
  console.log(props);
  return (
    <div>
      <ExpenseForm expense={props.expense} onSubmit={
        (expense)=>{
          console.log(expense);
          props.dispatch(startEditExpense(props.expense.id,expense))
          props.history.push("/")
        }
      }/>
      <button onClick={(e)=>{
        props.dispatch(startRemoveExpense({id:props.expense.id}));
        props.history.push("/")
    }}>Remove</button>
    </div>
  );
};

const mapStateToProps=(state,props)=>({
  expense:state.expenses.find((expense)=>(
    expense.id===props.match.params.id
  ))
}
)
export default connect(mapStateToProps)(Edit);
