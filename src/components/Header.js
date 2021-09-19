import React from 'react';
import {NavLink} from 'react-router-dom'
import { connect } from 'react-redux';
import { startLogout } from '../actions/auth';
const Header=(props)=>(
    <header>
      <h1>Expensify</h1>
      <div><NavLink to="/" activeClassName="is-active" exact={true}>Go to Home Page</NavLink></div>
      <div><NavLink to="/create" activeClassName="is-active" exact={true}>Go to Create Page</NavLink></div>
      <div><NavLink to="/edit" activeClassName="is-active" exact={true}>Go to Edit Page</NavLink></div>
      <NavLink to="/help" activeClassName="is-active" exact={true}>Go to Help Page</NavLink>
      <button onClick={()=>props.dispatch(startLogout())}>Logout</button>
    </header>
  )
  export default connect()(Header);