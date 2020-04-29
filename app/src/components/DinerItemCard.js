import React from 'react'


const DinerItemCard = (props) => {

    return (
        <div>
          <h1 className="TruckCardInfo">Dish Name: {props.cuisine.item_name}</h1>
            <p className="TruckCardInfo">item_description: {props.cuisine.item_description}</p>
            <p className="TruckCardInfo">{props.cuisine.item_photo_url}</p>
            <p className="TruckCardInfo">Item Price: {props.cuisine.item_price}</p>
        </div>
    )
}

export default DinerItemCard