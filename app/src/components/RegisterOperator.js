import React from "react";
import axios from 'axios';
import { Redirect } from "react-router-dom";


// form validation 
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
      this.props.history.push("/")
    })
    .catch(error => console.log(error));
  }

  // adds certain requirments too fill out the following: username, email, and passwordho
  render(){
    return (
      <div>
        <h1>REGISTER OPERATOR</h1>
        <form onSubmit={this.handleSubmit}>
          <input type="text" onChange={this.handleChanges} name="username" placeholder="username" minLength="6" maxLength="11" required />
          <input type="text" onChange={this.handleChanges} name="email" placeholder="email" minLength="20" maxLength="30" required />
          <input type="password" onChange={this.handleChanges} name="password" placeholder="password" minLength="7" maxLength="12" required  />
          <input type="submit" />
        </form>
      </div>
      );
    };
  }

export default RegisterOperator;
