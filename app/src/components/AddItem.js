import React, { useContext, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import ItemContext from '../contexts/ItemContext';
import axiosWithAuth from '../utils/axiosWithAuth';
import MenuContext from '../contexts/MenuContext';

const AddItem = () => {
    let {truckid} = useParams()
    let {menu, setMenu} = useContext(MenuContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        axiosWithAuth()
        .post(`https://food-truck-trackr-bw.herokuapp.com/api/operator/${truckid}/items`, menu)
        .then(res => {
          console.log('SUCCESS POST', res)
          window.location.reload(true);
        })
        .catch(error => console.log(error));
    }

    const handleChanges = (input) => {
        setMenu({...menu, [input.target.name] : input.target.value})
        console.log('Menu update:',menu)
      }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" onChange={handleChanges} name="item_name" placeholder="item_Name" required />
                <input type="text" onChange={handleChanges} name="item_description" placeholder="item_description"/>
                <input type="text" onChange={handleChanges} name="item_photo_url" placeholder="item_photo_url" required />
                <input type="text" onChange={handleChanges} name="item_price" placeholder="item_price" required />
                <input type="submit" />
            </form>
        </div>
    )
}

export default AddItem;