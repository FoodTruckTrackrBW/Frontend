import React, { useState, useEffect, useContext } from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';
import userContext from '../contexts/UserContext';
import { useHistory } from 'react-router-dom';
import truckContext from '../contexts/TruckContext';
import TruckList from './TruckList';

// Student's code was organized at the component level, proper usage of state and props are demonstrated throughout the project, the UI is composed of small reusable components, proper usage of useState and useEffect hooks are clearly incorporated and correctly implemented.  Student used Array methods to dynamically render HTML elements.

const DinerProfile = () => {
    let {user, setUser} = useContext(userContext)
    const {trucks, setTrucks} = useContext(truckContext)

    const { push } = useHistory()

    useEffect(() => {
        axiosWithAuth().get(`https://food-truck-trackr-bw.herokuapp.com/api/diner`)
        .then(response => {
            setTrucks(response.data.trucks)
            console.log('RESPONSE', trucks)
        })
        .catch(error => {
            console.log(error)
        })

        axiosWithAuth().get(`https://food-truck-trackr-bw.herokuapp.com/api/auth/account`)
        .then(response => {
            console.log('TEST',response.data.user)
        })
        .catch(error => {
            console.log(error)
        })
        
    },[])
    console.log('TRUCKS', trucks);
    console.log('USERINFO!', user);

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
            <button onClick={logout}>LOGOUT</button>
            <h1>Hello {user.username}!</h1>
            <h1>Favorite Cuisine type:</h1>
            <TruckList />
        </div>
    )
}

export default DinerProfile;