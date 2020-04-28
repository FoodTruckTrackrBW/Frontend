import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Login from './components/Login';

import Register from './components/Register';


//State management Imports
import DataContext from './contexts/UserContext';

//Protected Route Imports
import PrivateRoute from '../src/components/ProtectedRoute';

import Home from './components/Home';


import DinerProfile from '../src/components/DinerProfile';
import OperatorProfile from '../src/components/OperatorProfile';
import useLocalStorage from './utils/useLocalStorage';

function App() {

  

  const [user, setUser] = useLocalStorage({
    username: '',
    password: '',
  })
  return (
    <div className="App">
      <DataContext.Provider value={{user, setUser}}>
        <header />
        <Route exact path="/" component={Login} />
        <Route exact path="/Register" component={Register} />
        <PrivateRoute path="/DinerProfile" component={DinerProfile} />
        <PrivateRoute path="/OperatorProfile" component={OperatorProfile} />
        <Switch>


        </Switch>
      </DataContext.Provider>
    </div>
  );
}

export default App;