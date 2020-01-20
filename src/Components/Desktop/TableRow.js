import React, { Component } from 'react';
import axios from 'axios';
import { GetUserDetailsById } from '../../Action/Registeraction';
import { connect } from 'react-redux';

class TableRow extends Component {
  constructor(props) {
    super(props);
    this.delete = this.delete.bind(this);
  }
  delete() {
    axios.delete(`http://localhost:3001/delete/${this.props.obj._id}`)
      .then(console.log('Deleted'))
      .catch(err => console.log(err))
    window.location.reload();
  }

  componentDidMount() {
    const LoginDetails = (localStorage.getItem('LOGINDETAILS'));
    const LogDet = JSON.parse(LoginDetails);
    this.props.GetUserDetailsById(LogDet.userId);
  }

  render() {
    const { UserDetails } = this.props;
    return (
      <tr>
        <td>
          {this.props.obj.Employee_Id}
        </td>
        <td>
          {this.props.obj.Asset_Number}
        </td>
        <td>
          {this.props.obj.Name}
        </td>
        <td>
          {this.props.obj.MAC_Address}
        </td>
        <td>
          {this.props.obj.Comment}
        </td>
        <td>
          {UserDetails.IsAdmin ? <button className="btn btn-primary">Edit</button> : ""}
        </td>
        <td>
          {UserDetails.IsAdmin ? <button onClick={this.delete} className="btn btn-danger">Delete</button> : ""}
        </td>
      </tr>
    );
  }
}

const mapStateToProps = (state) => {
  const { UserDetails } = state.Registerreducer
  return { UserDetails }
}
export default connect(mapStateToProps, { GetUserDetailsById })(TableRow);
