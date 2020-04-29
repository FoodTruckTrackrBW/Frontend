import React from 'react'
import axiosWithAuth from '../utils/axiosWithAuth';

const OwnedTruckCard = (props) => {

    const deleteTruck = () => {
        axiosWithAuth().delete(`https://food-truck-trackr-bw.herokuapp.com/api/operator/${props.truck.id}`, props)
        window.location.reload(true);
        console.log('DELETING:', props)
      }

    return (
        <div className="TruckCard">
            <h1 className="TruckCardInfo">Truck Name: {props.truck.truck_name}</h1>
            <p className="TruckCardInfo">Cuisine Type: {props.truck.cuisine_type}</p>
            <p className="TruckCardInfo">{props.truck.truck_img_url}</p>
            <p className="TruckCardInfo">Depearture Time: {props.truck.departure_time}</p>
            <button onClick={deleteTruck}>DELETE</button>
        </div>
    )
}

export default OwnedTruckCard