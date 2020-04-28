import React from "react";
import { Link } from 'react-router-dom';
import DinerLogin from "./DinerLogin";
import OperatorLogin from "./OperatorLogin";

const Home = () => {

    return (
        <div>
            <DinerLogin />
            <OperatorLogin />
        </div>
    )
}

export default Home;