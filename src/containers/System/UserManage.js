import React, { Component } from "react";
// import { FormattedMessage } from 'react-intl';
import { connect } from "react-redux";
import { getAllUsers } from "../../services/userService";
import "./UserManage.scss";
class UserManage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arrUsers: [],
    };
  }

  async componentDidMount() {
    let response = await getAllUsers("All");
    if (response && response.errCode === 0) {
      this.setState({
        arrUsers: response.users,
      });
    }
  }

  render() {
    console.log("check", this.state);
    let arrUsers = this.state.arrUsers;
    return (
      <div className="user-container">
        <div className="title text-center">Manage Users</div>
        <div className="users-table mt-3 mx-1">
          <table id="customers">
            <tr>
              <th>UserID</th>
              <th>UserName</th>
              <th>Email</th>
              <th></th>
            </tr>
            {arrUsers &&
              arrUsers.map((item, index) => {
                console.log("check map", item, index);
                return (
                  <tr>
                    <td>{item.userID}</td>
                    <td>{item.userName}</td>
                    <td>{item.email}</td>
                    <td>
                      <button className="btn-edit">
                        <i class="fas fa-pencil-alt"></i>
                      </button>
                      <button className="btn-delete">
                        <i class="fa fa-trash"></i>
                      </button>
                    </td>
                  </tr>
                );
              })}
          </table>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(UserManage);
