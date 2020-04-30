import React, { useState, useEffect } from "react";
import axiosWithAuth from "../utils/axiosWithAuth";
import { Link, useParams } from 'react-router-dom';
import ItemCard from '../components/ItemCard';



const MenuOwned = () => {
    const [menu, setMenu] = useState([{}]);
    useEffect(() => {
    axiosWithAuth()
    .get(`https://food-truck-trackr-bw.herokuapp.com/api/operator/${truckid}/items`)
    .then(res => {
        setMenu(res.data.items) 
    })},[])	
        let {truckid} = useParams()

        console.log('MENU!', menu)
    return (
        <div className="truck-details">
            {menu.map(item => { return (
                <ItemCard food={item}/>
            )})}
        </div>
    
    );
}

export default MenuOwned;
