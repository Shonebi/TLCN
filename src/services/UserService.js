import raw from "body-parser";
import bcrypt from "bcryptjs";
import db from "../models/index";
import { where } from "sequelize";

const salt = bcrypt.genSaltSync(10);

let hashUserPassword = (password) => {
  return new Promise(async (resolve, reject) => {
    try {
      let hashPassword = await bcrypt.hashSync(password, salt);
      resolve(hashPassword);
    } catch (e) {
      reject(e);
    }
  });
};

let handleUserLogin = (email, password) => {
  return new Promise(async (resolve, reject) => {
    try {
      let userData = {};
      let isExist = await checkUserEmail(email);
      if (isExist) {
        let user = await db.User.findOne({
          attributes: ["email", "password"],
          where: { email: email },
          raw: true,
        });
        if (user) {
          let checkPassword = await bcrypt.compareSync(password, user.password);
          if (checkPassword) {
            userData.errCode = 0;
            userData.errMessage = "Password is correct";
            delete user.password;
            userData.user = user;
          } else {
            userData.errCode = 3;
            userData.errMessage = "Password is incorrect";
          }
        } else {
          userData.errCode = 2;
          userData.errMessage = `User not found.`;
        }
      } else {
        userData.errCode = 1;
        userData.errMessage = `Your email isn't exist in my system. Please try another email.`;
      }
      resolve(userData);
    } catch (e) {
      reject(e);
    }
  });
};

let checkUserEmail = (userEmail) => {
  return new Promise(async (resolve, reject) => {
    try {
      let user = await db.User.findOne({
        where: { email: userEmail },
      });
      if (user) {
        resolve(true);
      } else {
        resolve(false);
      }
    } catch (e) {
      reject(e);
    }
  });
};

let getAllUsers = (userID) => {
  return new Promise(async (resolve, reject) => {
    try {
      let users;

      if (userID === "All") {
        // Lấy tất cả người dùng
        users = await db.User.findAll({
          attributes: { exclude: ["password"] }, // Loại bỏ cột nhạy cảm
        });
      }
      if (userID && userID !== "All") {
        // Lấy thông tin một người dùng cụ thể
        users = await db.User.findOne({
          where: { userID: userID },
          attributes: { exclude: ["password"] }, // Loại bỏ cột nhạy cảm
        });
      }

      resolve(users);
    } catch (error) {
      reject(error);
    }
  });
};

let createNewUser = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      //check email
      let checkEmail = await checkUserEmail(data.email);
      if (checkEmail === true) {
        resolve({
          errCode: 1,
          errMessage: "Your email is exist",
        });
      }
      let hashUserPasswordFromBcrypt = await hashUserPassword(data.password);
      await db.User.create({
        userName: data.userName,
        birthday: data.birthday,
        numPhone: data.numPhone,
        address: data.address,
        email: data.email,
        password: hashUserPasswordFromBcrypt,
        gender: data.gender === "1" ? true : false,
      });
      console.log(data);

      resolve({
        errCode: 0,
        errMessage: "Create new user success",
      });
    } catch (e) {
      reject(e);
    }
  });
};

let deleteUser = (userID) => {
  return new Promise(async (resolve, reject) => {
    let user = await db.User.findOne({
      where: { userID: userID },
    });
    if (!user) {
      resolve({
        errCode: 2,
        errMessage: "User is not exist!",
      });
    }
    await db.User.destroy({
      where: { userID: userID },
    });

    resolve({
      errCode: 0,
      errMessage: "Deleted user",
    });
  });
};

let updateUserData = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      if (!data.userID) {
        resolve({
          errCode: 2,
          errMessage: "Missing required parameter",
        });
      }
      let user = await db.User.findOne({
        where: { userID: data.userID },
        raw: false,
      });
      if (user) {
        user.userName = data.userName;
        user.birthday = data.birthday;
        user.numPhone = data.numPhone;
        user.address = data.address;
        user.gender = data.gender;

        await user.save();
        // await db.User.save({
        //   userName: data.userName,
        //   birthday: data.birthday,
        //   numPhone: data.numPhone,
        //   address: data.address,
        //   gender: data.gender,
        // });
        resolve({
          errCode: 0,
          errMessage: `The your information is updated`,
        });
      } else {
        resolve();
      }
    } catch (e) {
      reject(e);
    }
  });
};
module.exports = {
  handleUserLogin: handleUserLogin,
  getAllUsers: getAllUsers,
  createNewUser: createNewUser,
  deleteUser: deleteUser,
  updateUserData: updateUserData,
};
