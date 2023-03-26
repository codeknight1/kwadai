import React, {useState} from "react";
import logo from './logo.svg';
import './App.css';
import Login from './components/Login/Login'
import Signup from './components/Signup/Signup'



const App = () => {
  return (
    <div className="App">
      {/* <Login /> */}
      <Signup/>
    </div>
  );
}

export default App;
