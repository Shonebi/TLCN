import React, { Component } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";

import * as actions from "../../store/actions";
import "./Login.scss";
import { handleLoginApi } from "../../services/userService";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      isShowPassword: false,
      errMessage: "",
    };
  }

  handleOnChangeInput = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });

    console.log(event.target.value);
  };

  handleLogin = async () => {
    this.setState({
      errMessage: "",
    });
    console.log(
      "username: ",
      this.state.email,
      "password: ",
      this.state.password
    );
    try {
      let data = await handleLoginApi(this.state.email, this.state.password);
      if (data && data.errCode !== 0) {
        this.setState({
          errMessage: data.message,
        });
      }
      if (data && data.errCode === 0) {
        this.props.userLoginSuccess(data.user);
        console.log("login succeed");
      }
    } catch (error) {
      if (error.response) {
        if (error.response.data) {
          this.setState({
            errMessage: error.response.data.message,
          });
        }
      }
      console.log("t1shop", error.response);
    }
  };

  handelisShowPassword = () => {
    this.setState({
      isShowPassword: !this.state.isShowPassword,
    });
  };
  render() {
    return (
      <div className="login-background">
        <div className="login-container">
          <div className="login-content row">
            <div className="col-12 text-center login-text">LOGIN</div>
            <div className="col-12 form-group login-input">
              <label>Email address</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter your email address"
                name="email"
                value={this.state.email}
                onChange={(event) => this.handleOnChangeInput(event)}
              />
            </div>
            <div className="col-12 form-group login-input">
              <label>Password</label>
              <div className="input-password-control">
                <input
                  type={this.state.isShowPassword ? "text" : "password"}
                  className="form-control"
                  placeholder="Enter your password"
                  name="password"
                  value={this.state.password}
                  onChange={(event) => this.handleOnChangeInput(event)}
                />
                <span
                  onClick={() => {
                    this.handelisShowPassword();
                  }}
                >
                  <i
                    className={
                      this.state.isShowPassword
                        ? "fa fa-eye "
                        : "fa fa-eye-slash"
                    }
                  ></i>
                </span>
              </div>
            </div>
            <div className="col-12" style={{ color: "red" }}>
              {this.state.errMessage}
            </div>
            <div className="col-12">
              <button
                className="login-btn"
                onClick={() => {
                  this.handleLogin();
                }}
              >
                Login
              </button>
            </div>
            <div className="col-12 span-control">
              <span>Forgot password</span>
              <span>Create account</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    language: state.app.language,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    navigate: (path) => dispatch(push(path)),
    // userLoginFail: () => dispatch(actions.userLoginFail()),
    userLoginSuccess: (userInfo) =>
      dispatch(actions.userLoginSuccess(userInfo)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
