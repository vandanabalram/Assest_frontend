import React, { Component } from 'react';
import axios from 'axios';
import './Forgetpassword.css';

class Forgetpassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      _id: '',
      password: ''
    }
  }

  handlechange = (e) => {
    this.setState({ password: e.target.value })
  }

  changepassw = () => {
    const payload = {
      email: sessionStorage.getItem('change'),
      password: this.state.password
    }
    console.log(payload)

    axios.put(`http://localhost:3001/reset`, payload)
      .then(console.log('update'))
      .catch(err => console.log(err))
    window.location.reload();
  }

  render() {
    return (
      <div className="forgetimg">
        <div className="forgetpassword">
          <label><b className="new">New Password</b></label><br />
          <input type="text" onChange={this.handlechange} placeholder="enter new password"></input><br />
          <button onClick={this.changepassw} name="password" className="btn btn-danger">change password</button>
        </div>
      </div>
    )
  }
}
export default Forgetpassword;

