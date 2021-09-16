import React from "react";
import ReactDOM from "react-dom";
import "normalize.css";
import AppRouter from "./routers/AppRouter";
import "./styles/styles.scss";
import configureStore from "./store/configureStore";
import {addExpense} from "./actions/expenses";
import {setTextFilter} from "./actions/filters"
import visibleExpenses from "./selectors/expenses"
import { Provider } from "react-redux";
import moment from "moment";
import getTotalSum from "./selectors/expense-total";
import "./firebase/firebase"
import "./playground/promises"

const store=configureStore();
//console.log(store.getState());
//store.dispatch(addExpense({amount:15000,desc:"Water Bill", createdAt:moment().add(4,"days")}))
//store.dispatch(addExpense({desc:"Gas Bill", amount:6000}))
//store.dispatch(addExpense({desc:"Rent", amount:1200,createdAt:moment()}))
//const state=store.getState();

//const visibleExpensesList=visibleExpenses(state.expenses, state.filters)
//console.log(getTotalSum(visibleExpensesList));


const jsx=(
    <Provider store={store}>
        <AppRouter/>
    </Provider>
)
ReactDOM.render(jsx, document.getElementById("appRoot"));
