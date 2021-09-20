import React, { useState } from 'react'
import moment from 'moment'
import { SingleDatePicker } from 'react-dates';
import "react-dates/lib/css/_datepicker.css";
const now=moment();
console.log(now.format())


export default class ExpenseForm extends React.Component{
    constructor(props){
        super(props);
        console.log(props)
        this.state={
            description:props.expense ? props.expense.desc : "",
            amount:props.expense ? props.expense.amount : "",
            note:props.expense ? props.expense.note : "",
            createdAt:props.expense ? moment(props.expense.createdAt) : moment(),
            focused:false,
            error:""
            
        }
    }
    onAmountChange=(e)=>{
        const amount=e.target.value;
        if(!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)){
            this.setState(()=>({
                amount
            })
            )
        }
    }
    onFocusChange=({focused})=>{
        this.setState(()=>(
            {
                focused
            }
        ))

    }
    onSubmit=(e)=>{
        e.preventDefault();
        if(!this.state.description || !this.state.amount){
            this.setState(()=>(
            {
                error:"Please provide description and Amount"
            })
            )
        }
        else{
            this.setState(()=>(
                {
                    error:""
                })
                );
            this.props.onSubmit(
                {
                    desc:this.state.description,
                    amount: parseFloat(this.state.amount,10)*100,
                    createdAt: this.state.createdAt.valueOf(),
                    note:this.state.note
                }
            )
        }
    }
    render(){
        return (
                
                <form className="form" onSubmit={this.onSubmit}>
                {this.state.error && <p className="form__error">{this.state.error}</p>}
                    <input
                        className="text-input"
                        type="text"
                        placeholder="Description"
                        autoFocus
                        value={this.state.description}
                        onChange={(e)=>{
                            const description=e.target.value;
                            this.setState(()=>({description}))
                        }
                    }
                    />
                    <input
                        type="number"
                        className="text-input"
                        placeholder="Amount"
                        value={this.state.amount}
                        onChange={this.onAmountChange}
                    
                    />
                    <SingleDatePicker 
                        date={this.state.createdAt}
                        onDateChange={(createdAt)=>{
                            if(createdAt){
                            this.setState(()=>{
                                createdAt
                            });
                        }
                        }}
                        focused={this.state.focused}
                        onFocusChange={this.onFocusChange}
                        numberOfMonths={1}
                        isOutsideRange={()=>{
                            false
                        }}
                        
                    />
                    <textarea
                        className="text-area" 
                        placeholder="Enter you note here (optional)"
                        value={this.state.note}
                        onChange={(e)=>{
                            const note=e.target.value;
                            this.setState(()=>({note}))
                            }
                        }
                    ></textarea>
                   <div>
                    <button className="button">Add Expense</button>
                    </div>
                </form>
        )
    }
}