import React, { useContext } from 'react'
import { useHistory, useParams } from 'react-router-dom';
import truckContext from '../contexts/TruckContext';


import { Link, useParams } from 'react-router-dom'
import { useHistory } from 'react-router-dom';

const TruckCard = (props) => {
    const {trucks, setTrucks} = useContext(truckContext)
    let {truckid} = useParams()
    const {push} = useHistory()
        const toDinerMenu = () =>  {
        push(`/TruckDetails/${props.truck.id}`)
    }

    let {truckid} = useParams()
    const { push } = useHistory()

    const menuRedirect = () => {
        push(`/TruckDetails/${truckid}`)
    }

    return (
        <div className="TruckCard">
            <h1 className="TruckCardInfo">Truck Name: {props.truck.truck_name}</h1>
            <p className="TruckCardInfo">Cuisine Type: {props.truck.cuisine_type}</p>
            <p className="TruckCardInfo">{props.truck.truck_img_url}</p>
            <p className="TruckCardInfo">Depearture Time: {props.truck.departure_time}</p>
            <button onClick={menuRedirect}>MENU</button>
            <button onClick={toDinerMenu}>Menu</button>
        </div>
    )
}

export default TruckCard
