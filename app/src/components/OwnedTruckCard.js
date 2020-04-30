import React, { useContext } from 'react'
import axiosWithAuth from '../utils/axiosWithAuth';
import { useHistory } from 'react-router-dom';
import truckContext from '../contexts/TruckContext';

const OwnedTruckCard = (props) => {

    const { push } = useHistory()
    const {truckToUpdate, setTruckToUpdate} = useContext(truckContext);

    const deleteTruck = () => {
        axiosWithAuth().delete(`https://food-truck-trackr-bw.herokuapp.com/api/operator/${props.truck.id}`, props)
        window.location.reload(true);
        console.log('DELETING:', props)
      }

    const editTruck = () => {
        push(`/UpdateTruck/${props.truck.id}`)
        setTruckToUpdate(props.truck);
        console.log('Editing:', props.truck)
      }

      const toMenu = () => {
        push(`/TruckDetailsTest/${props.truck.id}`)
      }

    return (
        <div className="TruckCard">
            <h1 className="TruckCardInfo">Truck Name: {props.truck.truck_name}</h1>
            <p className="TruckCardInfo">Cuisine Type: {props.truck.cuisine_type}</p>
            <p className="TruckCardInfo">{props.truck.truck_img_url}</p>
            <p className="TruckCardInfo">Depearture Time: {props.truck.departure_time}</p>
            <button onClick={deleteTruck}>DELETE</button>
            <button onClick={editTruck}>Edit</button>
            <button onClick={toMenu}>MENU</button>
        </div>
    )
}

export default OwnedTruckCard