import React, { useState } from 'react';
// import logo from './logo.svg';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Login from './components/Login';

import Register from './components/Register';


//State management Imports


//Protected Route Imports
import PrivateRoute from '../src/components/ProtectedRoute';

import DinerProfile from '../src/components/DinerProfile';
import OperatorProfile from '../src/components/OperatorProfile';
import truckContext from './contexts/TruckContext';
import userContext from './contexts/UserContext';
import TruckList from './components/TruckList';
import OwnedTruckContext from '../src/contexts/OwnedTruckContext';

function App() {

  
  // initial state of user passed through every part of the site.
  const [user, setUser] = useState({
    username: '',
    password: '',
    favorite_cuisine_type: ''
  })

  // initial state of truck passed through every part of the site.
  const [trucks, setTrucks] = useState([{
      truck_name: "",
      truck_img_url: "", // Optional
      cuisine_type: "",
      departure_time: "" //<time in hh:mm:ss format>
  }])

  // initial state of Owned passed through every part of the site.
  const [owned, setOwned] = useState([])

  return (
    <div className="App">
      <userContext.Provider value={{user, setUser}}>
        <truckContext.Provider value={{trucks, setTrucks}}>
        <OwnedTruckContext.Provider value={{owned, setOwned}}>
          <header />
          <Route exact path="/" component={Login} />
          <Route exact path="/Register" component={Register} />
          <PrivateRoute path="/DinerProfile" component={DinerProfile} />
          <PrivateRoute path="/OperatorProfile" component={OperatorProfile} />
          <Switch>


          </Switch>
          </OwnedTruckContext.Provider>
        </truckContext.Provider>
      </userContext.Provider>
    </div>
  );
}

export default App;