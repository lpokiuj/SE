import { fetcher } from "../../config/fetcher";

/**
 * @typedef {Object} Calorie
 * @property {number} calorie
 * @property {string} id
 */

/**
 * @typedef {Object} User
 * @property {string} id
 * @property {string} name
 * @property {string} email
 * @property {string} password
 * @property {Object<Calorie>} calorie
 */

export const registerUser = async (userData) => {
  const response = await fetcher.post("/auth/register", {
    name: userData.name,
    email: userData.email,
    password: userData.password,
  });

  return response.data;
};

export const loginUser = async (userLoginData) => {
  try {
    const response = await fetcher.post("/auth/login", {
      email: userLoginData.email,
      password: userLoginData.password,
    });

    return [false, response.data];
  } catch (error) {
    return [true, null];
  }
};
