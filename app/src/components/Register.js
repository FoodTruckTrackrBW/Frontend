import React, { useState } from "react";
import { Link } from 'react-router-dom';
import DinerRegister from "./RegisterDiner";
import OperatorRegister from "./RegisterOperator";

// Student's code was organized at the component level, proper usage of state and props are demonstrated throughout the project, the UI is composed of small reusable components, proper usage of useState and useEffect hooks are clearly incorporated and correctly implemented.  Student used Array methods to dynamically render HTML elements.

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