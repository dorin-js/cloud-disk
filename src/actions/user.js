import axios from "axios";

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
    alert(error.response.data.message.errors[0].msg);
  }
};
