import React from 'react';
import ExpenseList from './ExpenseList';
import ExpenseListFilter from './ExpenseListFilter';

const DashBoard=()=>(
    <div>
      <ExpenseListFilter/>
      <ExpenseList/>
      
    </div>
  )
  export default DashBoard;