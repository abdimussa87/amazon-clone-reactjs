import React, {useEffect} from 'react';
import "./App.css"
import Header from "./Header"
import Home from "./Home"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from './Checkout';
import Login from './Login';
import {auth} from './firebase'
import { useStateValue } from './StateProvider';

function App() {

  const [{},dispatch] = useStateValue();

  useEffect(()=>{
    // *will run only once when the app component loads...
    // *since we are not passing anything in the second argument []
    // *but if we did it will rerun when that changes
    // *eg [basket] will rerun when the basket changes
    auth.onAuthStateChanged(authUser=>{
      // *the user is logged in
      if(authUser){
          dispatch({
            type:"SET_USER",
            user:authUser
          })
      }else{
        // *the user is logged out
        dispatch({
          type:"SET_USER",
          user:null
        });
      }
    });
  },[])

  return (
    // *BEM
    <Router>
      <div className="app">
       
        <Switch>
        <Route path="/login">
            <Login/>
          </Route>
          <Route path="/checkout">
          <Header />
            <Checkout/>
          </Route>
          <Route path="/">
          <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
