import { getToken } from "next-auth/jwt";
import { fetcher } from "../../config/fetcher";

const secret = "secret";

export default async (req, res) => {
  const token = await getToken({ req, secret });
  if (token) {
    // Signed in
    await fetcher.patch(
      `/calorie/${req.query.id}`,
      {
        calories: req.body.calories,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );
  } else {
    // Not Signed in
    res.status(401);
  }
  res.end();
};
