import React from 'react';
import {NavLink} from 'react-router-dom'
const Header=()=>(
    <header>
      <h1>Expensify</h1>
      <div><NavLink to="/" activeClassName="is-active" exact={true}>Go to Home Page</NavLink></div>
      <div><NavLink to="/create" activeClassName="is-active" exact={true}>Go to Create Page</NavLink></div>
      <div><NavLink to="/edit" activeClassName="is-active" exact={true}>Go to Edit Page</NavLink></div>
      <NavLink to="/help" activeClassName="is-active" exact={true}>Go to Help Page</NavLink>
    </header>
  )
  export default Header;