import React from "react";
import axiosWithAuth from "../utils/axiosWithAuth";
import axios from 'axios';

class OperatorProfile extends React.Component {
  constructor() {
    super();
    this.state = {
      credentials: {
        truck_name: "",
        truck_img_url: "", // Optional
        cuisine_type: "",
        departure_time: "" //<time in hh:mm:ss format>
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
    axiosWithAuth()
    .post('https://food-truck-trackr-bw.herokuapp.com/api/operator', this.state.credentials)
    .then(res => {
      console.log('SUCCESS POST', res)
    })
    .catch(error => console.log(error));
  }

  render(){
    return (
      <div>
        <h1>REGISTER DINER</h1>
        <form onSubmit={this.handleSubmit}>
          <input type="text" onChange={this.handleChanges} name="truck_name" placeholder="truck_name" required />
          <input type="text" onChange={this.handleChanges} name="truck_img_url" placeholder="truck_img_url"/>
          <input type="text" onChange={this.handleChanges} name="cuisine_type" placeholder="cuisine_type" required />
          <input type="text" onChange={this.handleChanges} name="departure_time" placeholder="departure_time" required />
          <input type="submit" />
        </form>
      </div>
      );
    };
  }

export default OperatorProfile;