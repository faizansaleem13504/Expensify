import getVisibleExpenses from "../../selectors/expenses"
import moment from "moment"

const expenses=[
    {
        id:"1",
        desc:"d1",
        note:"",
        createdAt:moment(0).valueOf()
    },
    {
        id:"2",
        desc:"d2",
        note:"",
        createdAt:moment(0).add(4,"days").valueOf()
    },
    {
        id:"3",
        desc:"d3",
        note:'hello note',
        createdAt:moment(0).subtract(4,"days").valueOf()
    }
]
test("it will test end date ",()=>{
    const filter={
        text:"",
        sortBy:"",
        startDate:moment(0),
        endDate:undefined
    }
    const result=getVisibleExpenses(expenses,filter);
    expect(result).toEqual([expenses[0],expenses[1]])
})