import React, { useState, useEffect } from "react";
import axiosWithAuth from "../utils/axiosWithAuth";
import { Link, useParams } from 'react-router-dom';
import ItemCard from '../components/ItemCard';
import AddItem from "./AddItem";

// Student implemented GET requests using either Axios or Fetch to display 3rd party data on a deployed page. Route management properly installed and used to show top level pages as well as nested views where necessary.
// Student's code was organized at the component level, proper usage of state and props are demonstrated throughout the project, the UI is composed of small reusable components, proper usage of useState and useEffect hooks are clearly incorporated and correctly implemented.  Student used Array methods to dynamically render HTML elements.

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
            <AddItem />

            {menu.map(item => { return (
                <ItemCard food={item}/>
            )})}
        </div>
    
    );
}

export default MenuOwned;
