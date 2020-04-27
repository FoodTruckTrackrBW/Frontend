import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/RegisterDiner';

//State management Imports
import DataContext from '../src/contexts/data';

//Protected Route Imports
import PrivateRoute from '../src/components/ProtectedRoute';

import Home from './components/Home';


import DinerProfile from '../src/components/DinerProfile';
import OperatorProfile from '../src/components/OperatorProfile';
import RegisterDiner from './components/RegisterDiner';
import RegisterOperator from './components/RegisterOperator';

function App() {
  return (
    <div className="App">
      <DataContext.Provider value={{}}>
        <header />
        <Route exact path="/Register" component={Register} />
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/RegisterDiner" component={RegisterDiner} />
        <Route exact path="/RegisterOperator" component={RegisterOperator} />
        <PrivateRoute path="/DinerProfile" component={DinerProfile} />
        <PrivateRoute path="/OperatorProfile" component={OperatorProfile} />
        <Switch>

        </Switch>
      </DataContext.Provider>
    </div>
  );
}

export default App;
