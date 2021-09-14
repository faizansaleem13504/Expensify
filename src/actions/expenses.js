import  uuid from "uuid";

export const addExpense=({ 
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

export const removeExpense=({id}={})=>{
    console.log(id)
    return (
    
    {
        type:"REMOVE_EXPENSE",
        id
    }
)
}
export const editExpense=(id, updates)=>{
return (
    {
        type:"EDIT_EXPENSE",
        id,
        updates
    }
)
}