import database from "../firebase/firebase";


export const addExpense=(expense)=>
{
return ({
    type:"ADD_EXPENSE",
    expense
})
}

export const startAddExpense=(expenseData={})=>{
    return (dispatch,getState)=>{
        const uid=getState().auth.uid;
    const {
        desc="",
        note="",
        amount=0,
        createdAt=0
    }=expenseData;
    const expense={desc,note,amount,createdAt};
    database.ref(`users/${uid}/expenses`).push(expense).then((ref)=>{
        dispatch(addExpense({
            id:ref.key,
            ...expense
        }))
    })
    }

}

export const removeExpense=({id}={})=>{
    return (
    
    {
        type:"REMOVE_EXPENSE",
        id
    }
)
}
export const startRemoveExpense=({id}={})=>{
    return (dispatch,getState)=>{
        const uid=getState().auth.uid;
        return database.ref(`users/${uid}/expenses/${id}`).remove().then(()=>{
            console.log("removed from firebase")
            dispatch(removeExpense({id}))
        })
    }
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
export const startEditExpense=(id,updates)=>{
    console.log("start edit expense",id,updates);
    return (dispatch,getState)=>{
        const uid=getState().auth.uid;
        return database.ref(`users/${uid}/expenses/${id}`).update({
            id,
            ...updates
        }).then(()=>{
            dispatch(editExpense(id,updates));
        })
    }
}
export const setExpenses=(expenses)=>{
    return (
        {
            type:"SET_EXPENSES",
            expenses

        }
    )
}
export const startSetExpenses=()=>{
    return (dispatch,getState)=>{
        const uid=getState().auth.uid;
        return database.ref(`users/${uid}/expenses`).once("value").then((snapshot)=>{
                const expenses=[];
                snapshot.forEach(element => {
                    expenses.push({
                        id:element.key,
                        ...element.val()
                    })
                });
                console.log(expenses);
                dispatch(setExpenses(expenses));
        });
    
    }
    
}