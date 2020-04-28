import React, { useContext } from "react";
import axiosWithAuth from "../utils/axiosWithAuth";
import axios from "axios";
import userContext from '../contexts/UserContext';
import { useHistory } from 'react-router-dom';

 const OperatorLogin = () => {

  const {user, setUser} = useContext(userContext)
  const { push } = useHistory()

  const handleChanges = (input) => {
    setUser({...user, [input.target.name] : input.target.value})
    console.log('User:',user)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
    .post('https://food-truck-trackr-bw.herokuapp.com/api/auth/login', user)
    .then(res => {
      console.log('HELLO FROM HANDLESUBMIT', user)
      localStorage.setItem('token', res.data.token);
      push("/OperatorProfile")
    })
    .catch(error => console.log(error));
  }

    return (
      <div>
        <h1>OPERATOR LOGIN</h1>
        <form className='test' onSubmit={handleSubmit}>
          <input type="text" onChange={handleChanges} name="username" placeholder="username" required />
          <input type="password" onChange={handleChanges} name="password" placeholder="password" required  />
          <input type="submit" />
        </form>
      </div>
      );
    };

export default OperatorLogin;