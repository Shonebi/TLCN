import db from "../models/index.js";

let getHomePage = async (req, res) => {
  try {
    // Lấy dữ liệu từ cơ sở dữ liệu
    let data = await db.User.findAll();
    console.log('-----------------------------')
    console.log(data)
    console.log('-----------------------------')
    // Truyền dữ liệu vào view
    return res.render("homePage.ejs"); // 'users' sẽ là biến có sẵn trong template EJS
  } catch (e) {
    console.log(e);
  }
};

let getAboutPage = async (req, res) => {
  return res.render("test/about.ejs");
};

module.exports = {
  getHomePage: getHomePage,
  getAboutPage: getAboutPage,
};
