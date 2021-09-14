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

const store=configureStore();
console.log(store.getState());
store.dispatch(addExpense({desc:"Water Bill", createdAt:1250}))
store.dispatch(addExpense({desc:"Gas Bill", amount:6000}))
store.dispatch(addExpense({desc:"Rent", amount:1200,createdAt:15000}))
const state=store.getState();
const visibleExpensesList=visibleExpenses(state.expenses, state.filters)
console.log(visibleExpensesList);


const jsx=(
    <Provider store={store}>
        <AppRouter/>
    </Provider>
)
ReactDOM.render(jsx, document.getElementById("appRoot"));
