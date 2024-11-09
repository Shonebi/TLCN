import db from "../models/index.js";
import CRUDservice from "../services/CRUDservices";

let getHomePage = async (req, res) => {
  try {
    // Lấy dữ liệu từ cơ sở dữ liệu
    let data = await db.User.findAll();

    return res.render("homePage.ejs", {
      data: JSON.stringify(data),
    }); // 'users' sẽ là biến có sẵn trong template EJS
  } catch (e) {
    console.log(e);
  }
};

let getCRUD = async (req, res) => {
  return res.render("login.ejs");
};

let getAboutPage = async (req, res) => {
  return res.render("test/about.ejs");
};

let postCRUD = async (req, res) => {
  let message = await CRUDservice.createNewUser(req.body);
  console.log(message);
  return res.send("post crud from server");
};

let getdisplayCRUD = async (req, res) => {
  let data = await CRUDservice.getAllUser();
  console.log("------------------------");
  console.log(data);
  console.log("------------------------");
  return res.render("getCRUD.ejs", {
    dataTable: data,
  });
};

let getEditCRUD = async (req, res) => {
  let userID = req.query.userID;
  if (userID) {
    let userData = await CRUDservice.GetUserInfoByID(userID);
    return res.render("editCRUD.ejs", {
      user: userData,
    });
  } else {
    return res.send("User not found");
  }
};

let PutCRUD = async (req, res) => {
  let data = req.body;
  let AllUser = await CRUDservice.updateUserData(data);
  return res.render("getCRUD.ejs", {
    dataTable: AllUser,
  });
};

let DeleteCRUD = async (req, res) => {
  let userID = req.query.userID;
  if (userID) {
    await CRUDservice.deleteUserByID(userID);
    return res.send("delete user");
  } else {
    return res.send("user not exit");
  }
};

module.exports = {
  getHomePage: getHomePage,
  getAboutPage: getAboutPage,
  getCRUD: getCRUD,
  postCRUD: postCRUD,
  getdisplayCRUD: getdisplayCRUD,
  getEditCRUD: getEditCRUD,
  PutCRUD: PutCRUD,
  DeleteCRUD: DeleteCRUD,
};
