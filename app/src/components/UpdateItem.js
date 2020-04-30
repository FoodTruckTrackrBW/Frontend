import React, { useContext } from 'react'
import truckContext from '../contexts/TruckContext'
import axiosWithAuth from '../utils/axiosWithAuth';
import { useHistory } from 'react-router-dom';
import ItemContext from '../contexts/ItemContext';
import { Link, useParams } from 'react-router-dom'
import userContext from '../contexts/UserContext';

const UpdateTruck = () => {
    let {itemid} = useParams()
    const { push } = useHistory()
    
    const {itemToUpdate, setItemToUpdate} = useContext(ItemContext);

    const handleChanges = (input) => {
        setItemToUpdate({...itemToUpdate, [input.target.name] : input.target.value})
        console.log('Itemsss!:',itemToUpdate)
      }

    const handleSubmit = (e) => {
    e.preventDefault();
    axiosWithAuth()
    .put(`https://food-truck-trackr-bw.herokuapp.com/api/operator/${1}/items/${itemid}`, itemToUpdate)
    .then(res => {
        console.log('put', res)
        push('/OperatorProfile')
    })
    .catch(error => console.log(error));
    }

    return (
        <div>

        <h1>edit item</h1>
        <form onSubmit={handleSubmit}>
          <input type="text" onChange={handleChanges} name="item_name" placeholder="Item Name" defaultValue={itemToUpdate.item_name} required />
          <input type="text" onChange={handleChanges} name="item_description" placeholder="Item Description" defaultValue={itemToUpdate.item_description}/>
          <input type="text" onChange={handleChanges} name="item_photo_url" placeholder="Item Image"  defaultValue={itemToUpdate.item_photo_url} required />
          <input type="text" onChange={handleChanges} name="item_price" placeholder="Item Price" defaultValue={itemToUpdate.item_price} required />
          <input type="submit" />
        </form>

        </div>
    )
}

export default UpdateTruck