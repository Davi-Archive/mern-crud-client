import axios from "axios";

const API_URL = "https://mern-crud-eta.vercel.app/api/users/";

// Register User

const register = async (useData) => {
  const response = await axios.post(API_URL, useData);

  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }
  return response.data;
};

// Login User

const login = async (useData) => {
  const response = await axios.post(API_URL + "login", useData);

  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }
  return response.data;
};

// Logout user
const logout = () => {
  localStorage.removeItem("user");
};

const authService = {
  register,
  logout,
  login,
};

export default authService;
