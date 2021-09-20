import React from "react";
import { connect } from "react-redux";
import { startLogin } from "../actions/auth";
const LoginPage=(props)=>{
    console.log(props)
    return (
    <div className="box-layout">
        <div className="box-layout__box">
            <h1 className="box-layout__title">Expensify</h1>
            <p>Get your expenses managed at ease</p>
           <button className="button" onClick={()=>props.dispatch(startLogin())}>Login With Google</button>
           </div>
    </div>
    )
}

export default connect()(LoginPage);