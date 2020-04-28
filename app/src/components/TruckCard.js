import React from 'react'

const TruckCard = (props) => {

    return (
        <div className="TruckCard">
            <p>Truck Name: {props.truck.truck_name}</p>
            <p>Cuisine Type: {props.truck.cuisine_type}</p>
            <p>{props.truck.truck_img_url}</p>
            <p>Depearture Time: {props.truck.departure_time}</p>
        </div>
    )
}

export default TruckCard