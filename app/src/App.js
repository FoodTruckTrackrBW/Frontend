import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Profile from './components/Profile';

function App() {
  return (
    <div className="App">
      <header />
      <Route exact path="/Register" component={Register} />
      <Route exact path="/" component={Login} />
      <Route exact path="/Profile" component={Profile} />
      <Switch>

      </Switch>
    </div>
  );
}

export default App;
