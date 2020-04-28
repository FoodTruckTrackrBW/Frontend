import React from "react";
import { Link } from 'react-router-dom';

const Home = () => {

    return (
        <div>
            HOMEPAGE!
            <button><Link to="/DinerLogin">Diner Login</Link></button>
            <button><Link to="/OperatorLogin">Operator Login</Link></button>
            <button><Link to="/RegisterDiner">REGISTER As Diner</Link></button>
            <button><Link to="/RegisterOperator">REGISTER As Operator</Link></button>
        </div>
    )
}

export default Home;