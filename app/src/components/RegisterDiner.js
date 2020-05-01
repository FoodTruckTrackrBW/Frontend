import React from "react";
import axiosWithAuth from "../utils/axiosWithAuth";
import axios from 'axios';

class RegisterDiner extends React.Component {
  constructor() {
    super();
    this.state = {
      credentials: {
        username: "",
        password: "",
        email: "",
        user_type: "diner",
        favorite_cuisine_type: ""
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
      console.log(this.state.credentials)
      this.props.history.push("/")
    })
    .catch(error => console.log(error));
  }

  render(){
    return (
      <div>
        <h1>REGISTER DINER</h1>
        <form onSubmit={this.handleSubmit}>
          <input type="text" onChange={this.handleChanges} name="username" placeholder="username" minLength="5" required />
          <input type="password" onChange={this.handleChanges} name="password" placeholder="password" required  />
          <input type="text" onChange={this.handleChanges} name="email" placeholder="email" required />
          <input type="text" onChange={this.handleChanges} name="favorite_cuisine_type" placeholder="favorite cuisine type" required />
          <input type="submit" />
        </form>
      </div>
      );
    };
  }

export default RegisterDiner;