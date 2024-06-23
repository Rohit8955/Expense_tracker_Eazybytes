import React, { useState } from "react";
import "./App.css";
import { Provider, useDispatch, useSelector } from "react-redux";
import Store from "./store/Store";
import { addtransaction } from "./store/ExpenseSlice";
import Home from "./components/Home";
const App = () => {

  
  return (
   <Provider store={Store}> 
    <Home/>
   </Provider>
  );
};

export default App;
