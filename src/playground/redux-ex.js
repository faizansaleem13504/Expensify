import {createStore} from 'redux';

const incrementCount=({incrementBy=1}={})=>(
    {
        type:"INCREMENT",
        incrementBy
    }
)

const decrementCount=({decrementBy=1}={})=>(
    {
        type:"DECREMENT",
        decrementBy
    }
)
const setCount=({setTo})=>(
    {
        type:"SET",
        setTo
    }
)
const store =createStore((state={count:0},action)=>{
    switch(action.type){
        case "INCREMENT":
            const incrementBy=typeof(action.incrementBy)==='number'?action.incrementBy:1;
            return {
                count:state.count+incrementBy
            }
        case "DECREMENT":
            const decrementBy=typeof action.decrementBy==='number'?action.decrementBy:1;
            return {
                count:state.count-decrementBy
            }
        case "RESET":
            return {
                count:0
            }    
        case "SET":
            return {
                count:action.setTo
            }    
        default:
            return state;
    }
});
store.subscribe(()=>{
    console.log(store.getState())
})
store.dispatch(setCount({setTo:100}))
store.dispatch(incrementCount({incrementBy:23}))
store.dispatch(decrementCount({decrementBy:23}))