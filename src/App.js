import logo from "./logo.svg";
import "./App.css";
import Layout from './components/Layout'
import { Route, Switch, } from "react-router-dom";
import Home from "./containers/Home";
import Signin from "./containers/Signin";
import Signup from "./containers/Signup";
import PrivateRoute from "./components/HOC/PrivateRoute"
import { useDispatch, useSelector } from 'react-redux';
import { getAllCategory, getInitialData, isUserLoggedIn } from "./actions";
import React, { useState, useEffect } from 'react';
import Orders from "./containers/Orders";
import Products from "./containers/Products";
import PageNotFound from "./containers/PageNotFound";
import Category from "./containers/Category";


function App() {
  const auth = useSelector(state => state.auth);

    const dispatch = useDispatch();
    useEffect(() => {
        if(!auth.authenticate){
            dispatch(isUserLoggedIn)
        }
        // dispatch(getAllCategory());
        dispatch(getInitialData());
        
    }, [])
  return (
    <div className="App">
      
        <Switch>
          <PrivateRoute path="/" exact component={Home} />
          <PrivateRoute path="/products"  component={Products} />
          <PrivateRoute path="/orders"  component={Orders} />
          <PrivateRoute path="/category"  component={Category} />
          {/* <Route path="/" exact component={Home}/> */}
          <Route path="/signin" component={Signin}/>
          <Route path="/signup" component={Signup}/>
          <Route path="*" component={PageNotFound}/>
        </Switch>
      
    </div>
  );
}

export default App;
