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
            
            <Link className="list-item" to={`/Edit/${props.expense.id}`}>
                <div>
                <h3 className="list-item__title">{props.expense.desc}</h3>
                <span className="list-item__subtitle"> {moment(props.expense.createdAt).format("MMMM Do, YYYY")}</span>
                </div>
           
            <h3 className="list-item__amount"> {numeral(props.expense.amount).format('$0,0.00')} </h3>
            </Link>
    )
}
export default ExpenseListItem;
