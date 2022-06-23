import axios from "axios";
import { setUser } from "../reducers/userSlice";

export const registration = async (name, email, password) => {
  try {
    const response = await axios.post(
      `http://localhost:5000/api/auth/registration`,
      {
        name,
        email,
        password,
      }
    );
    alert(response.data.message);
  } catch (error) {
    alert(error.response.data.message);
    console.log(error);
  }
};
export const login = (email, password) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(
        `http://localhost:5000/api/auth/login`,
        {
          email,
          password,
        }
      );
      dispatch(setUser(response.data.user));
      localStorage.setItem("token", response.data.token);
      console.log(response.data);
    } catch (error) {
      alert(error.response.data.message);
      console.log(error);
    }
  };
};

export const auth = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`http://localhost:5000/api/auth/auth`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      dispatch(setUser(response.data.user));
      localStorage.setItem("token", response.data.token);
    } catch (error) {
      let err =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      alert(err);
      // console.log(error);
      localStorage.removeItem("token");
    }
  };
};
// let err = error.response.data.message.errors[0].msg;
//     if (err) {
//       alert(err);
//     } else
