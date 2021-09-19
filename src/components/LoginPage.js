import React from "react";
import { connect } from "react-redux";
import { startLogin } from "../actions/auth";
const LoginPage=(props)=>{
    console.log(props)
    return (
    <div>
           <button onClick={()=>props.dispatch(startLogin())}>Login</button>
        
    </div>
    )
}

export default connect()(LoginPage);