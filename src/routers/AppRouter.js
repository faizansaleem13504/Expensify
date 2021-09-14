import React from "react";
import { BrowserRouter,Route,Switch} from "react-router-dom";
import DashBoard from "../components/Dashboard";
import Create from "../components/Create";
import Help from "../components/Help";
import Header from "../components/Header";
import Edit from "../components/Edit";
import PageNotFound from "../components/PageNotFound"
  
 
  

 
 
  const AppRouter=()=>(
    <BrowserRouter>
    <div>
      <Header></Header>
      <Switch>
        <Route path="/" component={DashBoard} exact={true}/>
        <Route path="/create" component={Create} exact={true}/>
        <Route path="/help" component={Help} exact={true}/>
        <Route path="/edit" component={Edit} exact={true}/>
        <Route path="/edit/:id" component={Edit} exact={true}/>
        <Route  component={PageNotFound} exact={true}/>
      </Switch>
      </div>
    </BrowserRouter>
  )
  export default AppRouter;