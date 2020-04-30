import React, { useState, useEffect } from "react";
import axiosWithAuth from "../utils/axiosWithAuth";
import { Link, useParams } from 'react-router-dom'
import DinerItemCard from './DinerItemCard';


// Passing thru ids for each truck that is selected in a list
const Menu = () => {
    const [menu, setMenu] = useState([{}]);
    useEffect(() => {
    axiosWithAuth()
    .get(`https://food-truck-trackr-bw.herokuapp.com/api/diner/${truckid}/menu`)
    .then(res => {
        console.log('data', res.data) 
        setMenu(res.data.menu)   
    })},[])	
        let {truckid} = useParams()
    console.log(menu)
    return (
        <div className="truck-details">
            {menu.map(item => { return (
                <DinerItemCard cuisine={item} />
            )})}
        </div>
    
    );
}

export default Menu;
