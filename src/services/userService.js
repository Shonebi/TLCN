import axios from "../axios";
const handleLoginApi = (userEmail, userPassword) => {
  return axios.post("/api/login", { email: userEmail, password: userPassword });
};

const getAllUsers = (inputID) => {
  return axios.get(`/api/get-all-users?userID=${inputID}`);
};

export { handleLoginApi, getAllUsers };
