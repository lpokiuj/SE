import { fetcher } from "../../config/fetcher";

export const registerUser = async (userData) => {
  const res = await fetcher.post("/auth/register", {
    email: userData.email,
    name: userData.name,
    password: userData.password,
  });

  return res.data;
};

export const getMe = async (token) => {
  const res = await fetcher.get("/users/me", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res.data;
};
