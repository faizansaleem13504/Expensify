
import React from "react";
import ExpenseForm from "./ExpenseForm";
import {startAddExpense} from "../actions/expenses"
import { connect } from "react-redux";

  const Create=(props)=>(
    <div>
      <ExpenseForm onSubmit={(expense)=>{
        console.log(props)
        props.dispatch(startAddExpense(expense))
        props.history.push('/')
      }
      }/>
    </div>
  
  )

  export default connect()(Create);
