import { json } from "body-parser";
import userService from "../services/UserService";

let handleLogin = async (req, res) => {
  let email = req.body.email;
  let password = req.body.password;

  if (!email || !password) {
    return res.status(500).json({
      errCode: 1,
      message: `Missing inputs parameter!`,
    });
  }
  let userData = await userService.handleUserLogin(email, password);
  // check email exit
  // compare password
  // return userInfo
  // access_token: JWT json web token
  return res.status(200).json({
    errCode: userData.errCode,
    message: userData.errMessage,
    user: userData.user ? userData.user : {},
  });
};

let handleGetAllUsers = async (req, res) => {
  try {
    let userID = req.query.userID;

    // Kiểm tra nếu `userID` không tồn tại
    if (!userID) {
      return res.status(400).json({
        errCode: 1,
        errMessage: "Missing required parameters",
        users: null,
      });
    }

    // Gọi dịch vụ để lấy danh sách người dùng
    let users = await userService.getAllUsers(userID);

    // Trả về dữ liệu
    return res.status(200).json({
      errCode: 0,
      errMessage: "Ok",
      users,
    });
  } catch (error) {
    console.error("Error in handleGetAllUsers:", error);
    return res.status(500).json({
      errCode: -1,
      errMessage: "Internal Server Error",
    });
  }
};

let handleCreateNewUser = async (req, res) => {
  let message = await userService.createNewUser(req.body);
  console.log(message);
  return res.status(200).json(message);
};
let handleDeleteUser = async (req, res) => {
  if (!req.body.userID) {
    return res.status(200).json({
      errCode: 1,
      errMessage: "Missing required parameter",
    });
  }
  let message = await userService.deleteUser(req.body.userID);
  return res.status(200).json(message);
};
let handleEditUser = async (req, res) => {
  let data = req.body;
  let message = await userService.updateUserData(data);
  return res.status(200).json(message);
};
module.exports = {
  handleLogin: handleLogin,
  handleGetAllUsers: handleGetAllUsers,
  handleCreateNewUser: handleCreateNewUser,
  handleEditUser: handleEditUser,
  handleDeleteUser: handleDeleteUser,
};
