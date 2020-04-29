import React, { useState, useEffect } from "react";
import axiosWithAuth from "../utils/axiosWithAuth";
import { Link, useParams } from 'react-router-dom'



const TruckDetails = () => {
    const [menu, setMenu] = useState([{}]);
    useEffect(() => {
    axiosWithAuth()
    .get(`https://food-truck-trackr-bw.herokuapp.com/api/diner/${truckid}/menu`)
    .then(res => {
        setMenu(res.data.menu)
        console.log(res.data)   
    })},[])	
        let {truckid} = useParams()

    // const TruckDetails = props => {
    //     const [truckCard, setTruckCard] = useState([]);
    //     const getTruckCard = () =>{
    //           axiosWithAuth().get('/')
    //           .then(res => {
    //               setTruckList(res.data)
    //                console.log(res.data)
    //               })
    //           .catch(err => console.log(err))
    //       }
    
    return (
        <div className="truck-details">
            {menu.map(item => { return (
                <div>{item.item_name}</div>
            )})}
        </div>
    
    );
}

export default TruckDetails;
