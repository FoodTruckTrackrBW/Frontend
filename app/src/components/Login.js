import React, { useState } from "react";
import { Link } from 'react-router-dom';
import DinerLogin from "./DinerLogin";
import OperatorLogin from "./OperatorLogin";


function Home () {
    const [ active, setActive ] = useState(true)

  
// console.log(setActive, active)
    return (
        <div>
      <div className={active? "Active" : "notActive"}>
           <DinerLogin />
      </div>
      <div className={active? "notActive" : "Active"} >
      <OperatorLogin/>
      </div>
      <div>
      <button onClick={() => setActive(!active)}> {active? "Operator login" : "Diner Login"} </button>
      <button>
      <Link to='/Register'>Sign Up Here</Link>
      </button>
      </div>
   </div>
    )
}

export default Home;