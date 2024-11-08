import express from "express";
import dotenv from "dotenv";
import viewEngine from "./config/viewEngine.js";
import initWebRoutes from "./routes/web.js";
import connectDB from "./config/connectDB.js";

dotenv.config();
let app = express();

// Sử dụng middleware của Express để xử lý JSON và URL-encoded dữ liệu
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Cấu hình view engine và các routes
viewEngine(app);
initWebRoutes(app);

connectDB();

let port = process.env.PORT;

app.listen(port, (err) => {
  if (err) {
    console.error("Error starting the server:", err.message);
  } else {
    console.log("App is running on port :" + port);
  }
});
