
import React from "react";
import ExpenseForm from "./ExpenseForm";
import {startAddExpense} from "../actions/expenses"
import { connect } from "react-redux";

  const Create=(props)=>(
    <div>
      <div className="page-header">
            <div className="content-container">
            <h1 className="page-header__title">Add Expense</h1>
            </div>
      </div>
      <div className="content-container">
      <ExpenseForm onSubmit={(expense)=>{
        console.log(props)
        props.dispatch(startAddExpense(expense))
        props.history.push('/dashboard')
      }
      }/>
      </div>
    </div>
  
  )

  export default connect()(Create);
