// import React, { Component } from "react";
// import { connect } from "react-redux";
// import { push } from "connected-react-router";

// import * as actions from "../store/actions";
// import { KeyCodeUtils, LanguageUtils } from "../utils";

// import userIcon from "../../src/assets/images/user.svg";
// import passIcon from "../../src/assets/images/pass.svg";
// import "./Login.scss"; // Nếu cần thêm các custom CSS
// import { FormattedMessage } from "react-intl";

// import userService from "../services/userService";

// class Login extends Component {
//   constructor(props) {
//     super(props);
//     this.btnLogin = React.createRef();
//   }

//   initialState = {
//     username: "",
//     password: "",
//     loginError: "",
//   };

//   state = {
//     ...this.initialState,
//   };

//   refresh = () => {
//     this.setState({
//       ...this.initialState,
//     });
//   };

//   onUsernameChange = (e) => {
//     this.setState({ username: e.target.value });
//   };

//   onPasswordChange = (e) => {
//     this.setState({ password: e.target.value });
//   };

//   redirectToSystemPage = () => {
//     const { navigate } = this.props;
//     const redirectPath = "/system/user-manage";
//     navigate(`${redirectPath}`);
//   };

//   processLogin = () => {
//     const { username, password } = this.state;

//     const { userLoginSuccess, userLoginFail } = this.props;
//     let loginBody = {
//       username: "user",
//       password: "123456",
//     };

//     let userInfo = {
//       tlid: "0",
//       tlfullname: "useristrator",
//       custype: "A",
//       accessToken: "eyJhbGciOiJIU",
//     };

//     userLoginSuccess(userInfo);
//     this.refresh();
//     this.redirectToSystemPage();
//     try {
//       userService.login(loginBody);
//     } catch (e) {
//       console.log("error login : ", e);
//     }
//   };

//   handlerKeyDown = (event) => {
//     const keyCode = event.which || event.keyCode;
//     if (keyCode === KeyCodeUtils.ENTER) {
//       event.preventDefault();
//       if (!this.btnLogin.current || this.btnLogin.current.disabled) return;
//       this.btnLogin.current.click();
//     }
//   };

//   componentDidMount() {
//     document.addEventListener("keydown", this.handlerKeyDown);
//   }

//   componentWillUnmount() {
//     document.removeEventListener("keydown", this.handlerKeyDown);
//     this.setState = (state, callback) => {
//       return;
//     };
//   }

//   render() {
//     const { username, password, loginError } = this.state;
//     const { lang } = this.props;

//     return (
//       <div className="d-flex align-items-center justify-content-center min-vh-100 bg-light">
//         <div
//           className="card shadow p-4"
//           style={{ maxWidth: "400px", width: "100%" }}
//         >
//           <div className="card-body">
//             <h2 className="text-center mb-4">
//               <FormattedMessage id="login.login" />
//             </h2>
//             <div className="mb-3 position-relative">
//               <img
//                 className="position-absolute"
//                 src={userIcon}
//                 alt="icon"
//                 style={{
//                   left: "10px",
//                   top: "50%",
//                   transform: "translateY(-50%)",
//                   width: "20px",
//                 }}
//               />
//               <input
//                 placeholder={LanguageUtils.getMessageByKey(
//                   "login.username",
//                   lang
//                 )}
//                 id="username"
//                 name="username"
//                 type="text"
//                 className="form-control ps-5"
//                 value={username}
//                 onChange={this.onUsernameChange}
//               />
//             </div>

//             <div className="mb-3 position-relative">
//               <img
//                 className="position-absolute"
//                 src={passIcon}
//                 alt="icon"
//                 style={{
//                   left: "10px",
//                   top: "50%",
//                   transform: "translateY(-50%)",
//                   width: "20px",
//                 }}
//               />
//               <input
//                 placeholder={LanguageUtils.getMessageByKey(
//                   "login.password",
//                   lang
//                 )}
//                 id="password"
//                 name="password"
//                 type="password"
//                 className="form-control ps-5"
//                 value={password}
//                 onChange={this.onPasswordChange}
//               />
//             </div>

//             {loginError && (
//               <div className="alert alert-danger text-center py-2 mb-3">
//                 {loginError}
//               </div>
//             )}

//             <div>
//               <button
//                 ref={this.btnLogin}
//                 id="btnLogin"
//                 type="button"
//                 className="btn btn-primary w-100"
//                 onClick={this.processLogin}
//               >
//                 {LanguageUtils.getMessageByKey("login.login", lang)}
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// const mapStateToProps = (state) => {
//   return {
//     lang: state.app.language,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     navigate: (path) => dispatch(push(path)),
//     userLoginSuccess: (userInfo) =>
//       dispatch(actions.userLoginSuccess(userInfo)),
//     userLoginFail: () => dispatch(actions.userLoginFail()),
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Login);
