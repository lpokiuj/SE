import { fetcher } from "../../config/fetcher";

export const getMe = async (token) => {
  const res = await fetcher.get("/users/me", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res.data;
};
