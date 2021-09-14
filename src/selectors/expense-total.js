
const getTotalSum=(filteredExpenses)=>{
    /*let sum=0;
    filteredExpenses.map((expense)=>{
        sum=sum+parseFloat(
            expense.amount);
        return(
            parseFloat(
            expense.amount)
        )
    })*/
    return filteredExpenses.map((expense)=>expense.amount).reduce((prev,curr)=>prev+curr,0)

    
//    return sum;
}
export default getTotalSum;