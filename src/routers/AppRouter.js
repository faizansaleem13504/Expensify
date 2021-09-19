import React from "react";
import { Router,Route,Switch} from "react-router-dom";
import DashBoard from "../components/Dashboard";
import Create from "../components/Create";
import Help from "../components/Help";
import Header from "../components/Header";
import Edit from "../components/Edit";
import PageNotFound from "../components/PageNotFound"
import LoginPage from "../components/LoginPage";
import createHistory from "history/createBrowserHistory"
  import PrivateRoute from "./PrivateRoute";
 export const history=createHistory();
 

 
 
  const AppRouter=(props)=>
  {
  return (
    <Router history={history}>
    <div>
      
      <Switch>
        <Route path="/" component={LoginPage} exact={true}/>
        <PrivateRoute path="/dashboard" component={DashBoard} exact={true}/>
        <PrivateRoute path="/create" component={Create} exact={true}/>
        <Route path="/help" component={Help} exact={true}/>
        <PrivateRoute path="/edit" component={Edit} exact={true}/>
        <PrivateRoute path="/edit/:id" component={Edit} exact={true}/>
        <Route  component={PageNotFound} exact={true}/>
      </Switch>
      </div>
    </Router>
  )
  }
  export default AppRouter;