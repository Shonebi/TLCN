import bcrypt from "bcryptjs";
import db from "../models/index";

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
        numPhone: numPhone,
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
module.exports = { createNewUser: createNewUser };
