import React, { useState, useEffect } from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';

const DinerProfile = () => {
    const [trucks, setTrucks] = useState()

    useEffect(() => {
        axiosWithAuth().get(`https://food-truck-trackr-bw.herokuapp.com/api/diner`)
        .then(response => {
          setTrucks(response)
          console.log(response)
        })
        .catch(error => {
            console.log(error)
        })
        console.log(trucks);
    },[])

    return (
        <div>
            TEST
        </div>
    )
}

export default DinerProfile;