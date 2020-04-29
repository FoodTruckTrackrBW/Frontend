import React, {useEffect, useContext, useState} from "react";
import axiosWithAuth from "../utils/axiosWithAuth";
import TruckContext from '../contexts/TruckContext';
import UserContext from '../contexts/UserContext';
import { useHistory } from 'react-router-dom';
import OwnedTruckContext from "../contexts/OwnedTruckContext";
import OwnedTruckCard from './OwnedTruckCard';

const OperatorProfile = () => {
  let {user, setUser} = useContext(UserContext)
  const {trucks, setTrucks} = useContext(TruckContext)
  const { push } = useHistory()

  const {owned, setOwned} = useContext(OwnedTruckContext)
  

  const handleChanges = (input) => {
    setTrucks({...trucks, [input.target.name] : input.target.value})
    console.log('trucks:',trucks)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    axiosWithAuth()
    .post('https://food-truck-trackr-bw.herokuapp.com/api/operator', trucks)
    .then(res => {
      console.log('SUCCESS POST', res)
      window.location.reload(true);
    })
    .catch(error => console.log(error));
  }


  // GETS the trucks owned by this operator!
  useEffect(() => {
    axiosWithAuth()
    .get('https://food-truck-trackr-bw.herokuapp.com/api/operator')
    .then(res => {
      console.log('SUCCESS GET', res)
      setOwned(res.data.trucks)
    })
    .catch(error => console.log(error));
  },[])
  console.log('OWNED!', owned)

  const logout = () => {
        
    localStorage.removeItem('token')
    setUser({
        username: '',
        password: ''
    })
    console.log("LOGGED OUT!", user)
    push('/')
}
    return (
      <div>
        <h1>Hello {user.username}!</h1>
        <button onClick={logout}>LOGOUT</button>
        <h1>Register New Truck</h1>
        <form onSubmit={handleSubmit}>
          <input type="text" onChange={handleChanges} name="truck_name" placeholder="truck_name" required />
          <input type="text" onChange={handleChanges} name="truck_img_url" placeholder="truck_img_url"/>
          <input type="text" onChange={handleChanges} name="cuisine_type" placeholder="cuisine_type" required />
          <input type="text" onChange={handleChanges} name="departure_time" placeholder="departure_time" required />
          <input type="submit" />
        </form>

        {owned.map(item => {
            return <OwnedTruckCard truck={item}/>
        })}
      </div>
      );
  }

export default OperatorProfile;