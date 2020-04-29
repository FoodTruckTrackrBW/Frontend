import React from 'react'

const TruckCard = (props) => {

    return (
        <div className="TruckCard">
            <h1 className="TruckCardInfo">Truck Name: {props.truck.truck_name}</h1>
            <p className="TruckCardInfo">Cuisine Type: {props.truck.cuisine_type}</p>
            <p className="TruckCardInfo">{props.truck.truck_img_url}</p>
            <p className="TruckCardInfo">Depearture Time: {props.truck.departure_time}</p>
        </div>
    )
}

export default TruckCard
