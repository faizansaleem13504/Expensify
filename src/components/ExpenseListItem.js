import React from 'react'
import { Link } from 'react-router-dom'
import numeral from 'numeral'
import moment from 'moment'
numeral.register('locale', 'fr', {
    delimiters: {
        thousands: ' ',
        decimal: ','
    },
    abbreviations: {
        thousand: 'k',
        million: 'm',
        billion: 'b',
        trillion: 't'
    },
    ordinal : function (number) {
        return number === 1 ? 'er' : 'ème';
    },
    currency: {
        symbol: 'Rs'
    }
});

// switch between locales
numeral.locale('fr');
const ExpenseListItem=(props)=>{
    return (
        <div>
            <h3>{props.expense.desc}</h3>
    <p> {numeral(props.expense.amount).format('$0,0.00')} 
    {moment(props.expense.createdAt).format("MMMM Do, YYYY")}</p>
    <Link to={`/Edit/${props.expense.id}`}>Edit Expense</Link>
    </div>
    )
}
export default ExpenseListItem;
