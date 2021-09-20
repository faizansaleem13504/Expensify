import React from "react";
import ReactDOM from "react-dom";
import "normalize.css";
import AppRouter,{history} from "./routers/AppRouter";
import "./styles/styles.scss";
import configureStore from "./store/configureStore";
import {login,logout} from "./actions/auth";
import {setTextFilter} from "./actions/filters"
import visibleExpenses from "./selectors/expenses"
import { Provider } from "react-redux";
import "./firebase/firebase"
import "./playground/promises";
import { startSetExpenses } from "./actions/expenses";
import {firebase} from "./firebase/firebase";
import LandingPage from "./components/LandingPage"
const store=configureStore();

//console.log(store.getState());
//store.dispatch(addExpense({amount:15000,desc:"Water Bill", createdAt:moment().add(4,"days")}))
//store.dispatch(addExpense({desc:"Gas Bill", amount:6000}))
//store.dispatch(addExpense({desc:"Rent", amount:1200,createdAt:moment()}))
//const state=store.getState();

//const visibleExpensesList=visibleExpenses(state.expenses, state.filters)
//console.log(getTotalSum(visibleExpensesList));
ReactDOM.render(<LandingPage/>, document.getElementById("appRoot"));
const jsx=(
    <Provider store={store}>
        <AppRouter/>
    </Provider>
)

let isRendered=false;
const renderApp=()=>{
    if(!isRendered){
        ReactDOM.render(jsx, document.getElementById("appRoot"));
        isRendered=true;
    }
}

firebase.auth().onAuthStateChanged((user)=>{
    if(user){
        store.dispatch(login(user.uid));
        store.dispatch(startSetExpenses()).then(()=>{
           renderApp();
           if(history.location.pathname="/")
            history.push("/dashboard")
        });
        console.log("logged in");
    }
    else{
        store.dispatch(logout());
        ReactDOM.render(jsx, document.getElementById("appRoot"));
        history.push("/")
    }
})

