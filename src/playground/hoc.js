import React from 'react'
import ReactDOM from "react-dom";

const Info=(props)=>(
    <div>
        <h1>Info</h1>
        <p>the info is : {props.info}</p>
    </div>
)
const requireAuthentication=(WrappedComponent)=>{
    return ((props)=>
        <div>
        {!props.isAuth && <p>Please login to see the info</p>}
        {props.isAuth && <WrappedComponent {...props}/>}
        </div>
    )
}
const AuthInfo=requireAuthentication(Info);
ReactDOM.render(<AuthInfo isAuth={false} info="please shut up."/>,document.getElementById("appRoot"))