import React, { useContext } from 'react'

import { Link, useParams } from 'react-router-dom'
import { useHistory } from 'react-router-dom';
import ItemContext from '../contexts/ItemContext';

const ItemCard = (props) => {

    const {itemToUpdate, setItemToUpdate} = useContext(ItemContext);

    let {truckid} = useParams()
    const { push } = useHistory()

    const editItem = () => {
        push(`/UpdateItem/${props.food.id}`)
        setItemToUpdate(props.food.id);
        // console.log('Editing:', props.truck)
      }

    return (
        <div className="TruckCard">
            <h1 className="TruckCardInfo">item Name: {props.food.item_name}</h1>
            <p className="TruckCardInfo">item description: {props.food.item_description}</p>
            <p className="TruckCardInfo">{<img src={props.truck.truck_img_url} className="photo"></img>}</p>
            <p className="TruckCardInfo">item price: {props.food.item_price}</p>
            <button onClick={editItem}>Edit Item</button>
        </div>
    )
}

export default ItemCard