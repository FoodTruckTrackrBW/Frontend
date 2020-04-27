// import React from "react";
import axiosWithAuth from "../utils/axiosWithAuth";

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      credentials: {
        username: '',
        password: ''
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
    .post('http://localhost:5000/api/login', this.state.credentials)
    .then(res => {
      console.log('HELLO FROM HANDLESUBMIT', res)
      localStorage.setItem('token', res.data.payload);
      this.props.history.push("/DinerProfile")
    })
    .catch(error => console.log(error));
  }

  // make a post request to retrieve a token from the api
  render(){
    return (
      <div>
        <h1>Welcome to Login</h1>
        <form onSubmit={this.handleSubmit}>
          <input type="text" onChange={this.handleChanges} name="username" placeholder="username" required />
          <input type="password" onChange={this.handleChanges} name="password" placeholder="password" required  />
          <input type="submit" />
        </form>
      </div>
      );
    };
  }

export default Login; 