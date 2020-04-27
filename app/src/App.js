import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Profile from './components/DinerProfile';

//State management Imports
import DataContext from '../src/contexts/data';

//Protected Route Imports
import PrivateRoute from '../src/components/ProtectedRoute';

import Profile from './components/Profile';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <DataContext.Provider value={{}}>
        <header />
        <Route exact path="/Register" component={Register} />
        <Route exact path="/" component={Login} />
        <PrivateRoute path="/Profile" component={Profile} />
        <Switch>
    
        </Switch>
      </DataContext.Provider>
    </div>
  );
}

export default App;