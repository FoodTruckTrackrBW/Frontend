import React, { useState } from "react";
import { Link } from 'react-router-dom';
import DinerRegister from "./RegisterDiner";
import OperatorRegister from "./RegisterOperator";

function Register () {
    const [ active, setActive ] = useState(true)

  
console.log(setActive, active)
    return (
        <div>
      <div className={active? "Active" : "notActive"}>
           <DinerRegister />
      </div>
      <div className={active? "notActive" : "Active"} >
      <OperatorRegister />
      </div>
      <div>
      <button onClick={() => setActive(!active)}> {active? "Operator Register" : "Diner Register"} </button>
      </div>
      <button>
      <Link to='/'>Login Here</Link>
      </button>
   </div>
    )
}

export default Register;