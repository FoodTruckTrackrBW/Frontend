import React, { useState, useEffect, useContext } from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';
import userContext from '../contexts/UserContext';
import { useHistory } from 'react-router-dom';
import TruckDinerData from '../contexts/TruckDinerData';
import TruckList from './TruckList';

const DinerProfile = () => {
    let {user, setUser} = useContext(userContext)
    const [trucks, setTrucks] = useState([])

    const { push } = useHistory()

    useEffect(() => {
        axiosWithAuth().get(`https://food-truck-trackr-bw.herokuapp.com/api/diner`)
        .then(response => {
            setTrucks(response.data.trucks)
        })
        .catch(error => {
            console.log(error)
        })
    },[])
    console.log('TRUCKS', trucks);

    const logout = () => {
        
        localStorage.removeItem('token')
        setUser = {
            username: '',
            password: '',
        }
        console.log("LOGGED OUT!", user)
        push('/login')
    }

    return (
        <div>
            <button onClick={logout}>LOGOUT</button>
            <TruckDinerData.Provider value={{trucks}}>
            <TruckList />
            </TruckDinerData.Provider>
        </div>
    )
}

export default DinerProfile;