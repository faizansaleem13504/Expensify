import { createStore, combineReducers } from "redux";
import  uuid from "uuid";
const expensesReducer=(state=[], action)=>{
    switch(action.type){
        case "ADD_EXPENSE":
            return [
                ...state,
                action.expense
            ]
        case "REMOVE_EXPENSE":
            console.log(action.id);
           return state.filter((item)=>(item.id!==action.id));
        case "EDIT_EXPENSE":
            return state.map((item)=>{
                if(item.id===action.id){
                   
                    return {
                        ...item,
                        ...action.updates
                    };
                }
                else{
                    return item;
                }
            })

        default:
            return state;
    }
}

const filtersReducerDefault={
    text:'',
    sortBy:'date',
    startDate:undefined,
    endDate:undefined
}
const filtersReducer=(state=filtersReducerDefault, action)=>{
    switch(action.type){
        case "SET_TEXT_FILTER":
            return {
                ...state,
                text:action.text
            }
        case "SORT_BY_AMOUNT":
            return {
                ...state,
                sortBy:'amount'
            }
        case "SORT_BY_DATE":
            return {
                ...state,
                sortBy:'date'
            }
        default:
            return state;
    }
}
const addExpense=({ 
        desc="",
        note="",
        amount=0,
        createdAt=0}={})=>
    {
    return ({
        type:"ADD_EXPENSE",
        expense:
        {
            id:uuid(),
            desc,
            note,
            amount,
            createdAt
        
        }
    })
}

const removeExpense=({id}={})=>{
    return (
        {
            type:"REMOVE_EXPENSE",
            id
        }
    )
}
const editExpense=(id, updates)=>{
    return (
        {
            type:"EDIT_EXPENSE",
            id,
            updates
        }
    )
}

const setTextFilter=(text)=>{
    return {
        type: "SET_TEXT_FILTER",
        text
    }
}
const sortByAmount=()=>{
    return {
        type: "SORT_BY_AMOUNT"
    }
}
const sortByDate=()=>{
    return {
        type: "SORT_BY_DATE"
    }
}
const getVisibleExpenses=(expenses, {text, sortBy, startDate, endDate})=>{
return expenses.filter((expense)=>{
    const startDateMatch=typeof startDate !=='number' || expense.createdAt>=startDate;
    const endDateMatch=typeof endDate !=='number' || expense.createdAt<=endDate;
    const textMatch=(expense.desc.toLowerCase()).includes(text.toLowerCase());

    return startDateMatch && endDateMatch && textMatch;
}).sort((a,b)=>{
    if(sortBy=='date'){
        return a.createdAt <b.createdAt ? 1 : -1;
    }
    else if(sortBy==='amount'){
        return a.amount<b.amount ? -1 : 1
    }
})
}
const store=createStore(combineReducers({
    expenses:expensesReducer,
    filters:filtersReducer
}));
store.subscribe(()=>{
    const state=store.getState();
    const visibleExpenses=getVisibleExpenses(state.expenses,state.filters);
    console.log(visibleExpenses)
})
const e1=store.dispatch(addExpense({desc:"Rent",amount:1000}))
const e2=store.dispatch(addExpense())
//const e3=store.dispatch(removeExpense({id:e1.expense.id}))
store.dispatch(editExpense(e2.expense.id,{amount:6000}))
//store.dispatch(setTextFilter('Ren'))
store.dispatch(sortByAmount())


const demoState={

    expenses:[{
        id:"123",
        desc:"asdasd",
        note:"asdas as dasd",
        amount:1000,
        createdAt:0
    }],
    filters:{
        text:"reny",
        sortBy:"amount",
        startDate:undefined,
        endDate:undefined
    }
}