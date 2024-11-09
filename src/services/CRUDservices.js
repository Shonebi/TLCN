import bcrypt from "bcryptjs";
import db from "../models/index";
import { raw } from "body-parser";
import { where } from "sequelize";

const salt = bcrypt.genSaltSync(10);

let createNewUser = async (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      let hashUserPasswordFromBcrypt = await hashUserPassword(data.password);
      await db.User.create({
        userName: data.userName,
        email: data.email,
        password: hashUserPasswordFromBcrypt,
        address: data.address,
        numPhone: data.numPhone,
        gender: data.gender === "1" ? true : false,
      });

      resolve("created a account");
    } catch (e) {
      reject(e);
    }
  });
};

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

let getAllUser = () => {
  return new Promise(async (resolve, reject) => {
    try {
      let users = db.User.findAll({
        raw: true,
      });
      resolve(users);
    } catch (e) {
      reject(e);
    }
  });
};

let GetUserInfoByID = (userID) => {
  return new Promise(async (resolve, reject) => {
    try {
      let user = await db.User.findOne({
        where: { userID: userID },
        raw: true,
      });
      if (user) {
        resolve(user);
      } else {
        resolve([]);
      }
    } catch (e) {
      reject(e);
    }
  });
};

let updateUserData = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      let user = await db.User.findOne({
        where: { userID: data.userID },
      });
      if (user) {
        user.userName = data.userName;
        user.address = data.address;

        await user.save();

        let AllUser = await db.User.findAll();
        resolve(AllUser);
      } else {
        resolve();
      }
    } catch (e) {
      console.log(e);
    }
  });
};

let deleteUserByID = (userID) => {
  return new Promise(async (resolve, reject) => {
    try {
      let user = await db.User.findOne({
        where: { userID: userID },
      });
      if (user) {
        await user.destroy();
      }
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

module.exports = {
  createNewUser: createNewUser,
  getAllUser: getAllUser,
  GetUserInfoByID: GetUserInfoByID,
  updateUserData: updateUserData,
  deleteUserByID: deleteUserByID,
};
