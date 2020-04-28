import React from "react";
import axiosWithAuth from "../utils/axiosWithAuth";
import axios from 'axios';

class RegisterOperator extends React.Component {
  constructor() {
    super();
    this.state = {
      credentials: {
        username: "",
        password: "",
        email: "",
        user_type: "operator"
      }
    }
  }

  handleChanges = (e) => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value
      }
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    axios
    .post('https://food-truck-trackr-bw.herokuapp.com/api/auth/register', this.state.credentials)
    .then(res => {
      console.log('SUCCESS POST', res)
      this.props.history.push("/OperatorProfile")
    })
    .catch(error => console.log(error));
  }

  render(){
    return (
      <div>
        <h1>REGISTER OPERATOR</h1>
        <form onSubmit={this.handleSubmit}>
          <input type="text" onChange={this.handleChanges} name="username" placeholder="username" required />
          <input type="text" onChange={this.handleChanges} name="email" placeholder="email" required />
          <input type="password" onChange={this.handleChanges} name="password" placeholder="password" required  />
          <input type="submit" />
        </form>
      </div>
      );
    };
  }

export default RegisterOperator;
