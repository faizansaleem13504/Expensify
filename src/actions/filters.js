export const setTextFilter=(text="")=>{
    return {
        type: "SET_TEXT_FILTER",
        text
    }
}
export const sortByAmount=()=>{
    return {
        type: "SORT_BY_AMOUNT"
    }
}
export const sortByDate=()=>{
    return {
        type: "SORT_BY_DATE"
    }
}
// SET_START_DATE
export const setStartDate = (startDate) => ({
    type: 'SET_START_DATE',
    startDate
  });
  
  // SET_END_DATE
  export const setEndDate = (endDate) => ({
    type: 'SET_END_DATE',
    endDate
  });
  