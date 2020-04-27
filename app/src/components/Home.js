import React from "react";
import { Link } from 'react-router-dom';

const Home = () => {

    return (
        <div>
            HOMEPAGE!
            <button><Link to="/login">LOGIN</Link></button>
            <button><Link to="/RegisterDiner">REGISTER As Diner</Link></button>
            <button><Link to="/RegisterOperator">REGISTER As Operator</Link></button>
        </div>
    )
}




export default Home;