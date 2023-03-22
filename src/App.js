import React, {useState} from "react";
import logo from './logo.svg';
import './App.css';
import Login from './components/Login/Login'
import Signup from './components/Signup/Signup'



const App = () => {
  const [currentForm, setCurrentForm] = useState('login')
  const toggleForm = (forName) => {
    setCurrentForm(forName)
  }
  return (
    <div className="App">
      {
        currentForm === 'login' ? <Login onFormSwitch={toggleForm}/> : <Signup onFormSwitch={toggleForm}/>
      }
    </div>
  );
}

export default App;
