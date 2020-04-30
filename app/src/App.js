import React, { useState } from 'react';
// import logo from './logo.svg';
import './App.css';
import { Switch, Route, useParams } from 'react-router-dom';
import Login from './components/Login';
import Menu from './components/Menu';
import "./styles.css";

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
import useLocalStorage from './utils/useLocalStorage';
import TruckDetails from './components/Menu';
import UpdateTruck from './components/UpdateTruck';
import MenuOwned from './components/MenuOwned';
import ItemContext from './contexts/ItemContext';
import UpdateItem from './components/UpdateItem';
import MenuContext from './contexts/MenuContext';


function App() {

  
  // initial state of user passed through every part of the site.
  const [user, setUser] = useLocalStorage({
    username: '',
    password: '',
    favorite_cuisine_type: ''
  })

  // initial state of truck passed through every part of the site.
  const [trucks, setTrucks] = useState([{
      id: "",
      truck_name: "",
      truck_img_url: "", // Optional
      cuisine_type: "",
      departure_time: "" //<time in hh:mm:ss format>
  }])

  // initial state of Owned passed through every part of the site.
  const [owned, setOwned] = useState([])

  // initial state of truck for editing
  const [truckToUpdate, setTruckToUpdate] = useState([{
    truck_name: "",
    truck_img_url: "", // Optional
    cuisine_type: "",
    departure_time: "" //<time in hh:mm:ss format>
}])

  // initial state of truck for editing
  const [itemToUpdate, setItemToUpdate] = useState([{
    item_description: "",
    item_name: "",
    item_photo_url: "", // Optional?
    item_price: "",
}])

const [menu, setMenu] = useState([{
  item_name: "",
  item_description: "",
  item_photo_url: "", // Optional?
  item_price: "",
}])

  return (
    <div className="App">
      <userContext.Provider value={{user, setUser}}>
        <truckContext.Provider value={{trucks, setTrucks, truckToUpdate, setTruckToUpdate}}>
          <OwnedTruckContext.Provider value={{owned, setOwned}}>
            <ItemContext.Provider value={{itemToUpdate, setItemToUpdate}}>
              <MenuContext.Provider value={{menu, setMenu}}>
                <header />
                <Route exact path="/" component={Login} />
                <Route exact path="/Register" component={Register} />
                <PrivateRoute path="/DinerProfile" component={DinerProfile} />
                <PrivateRoute path="/OperatorProfile" component={OperatorProfile} />
                <PrivateRoute path="/TruckDetails/:truckid" component={Menu} />
                <PrivateRoute path="/TruckDetailsOwnedMenu/:truckid" component={MenuOwned} />
                <PrivateRoute path="/UpdateTruck/:truckid" component={UpdateTruck} />
                <PrivateRoute path="/UpdateItem/:itemid" component={UpdateItem} />
                <Switch>
                </Switch>
              </MenuContext.Provider>
            </ItemContext.Provider>
          </OwnedTruckContext.Provider>
        </truckContext.Provider>
      </userContext.Provider>
    </div>
  );
}

export default App;