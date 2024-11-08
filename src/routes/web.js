import express from "express";
import {
  getHomePage,
  getAboutPage,
  getCRUD,
  postCRUD,
} from "../controllers/homeController";

let router = express.Router();

let initWebRoutes = (app) => {
  router.get("/", getHomePage);
  router.get("/about", getAboutPage);
  router.get("/crud", getCRUD);
  router.post("/post-crud", postCRUD);

  return app.use("/", router);
};

export default initWebRoutes;
