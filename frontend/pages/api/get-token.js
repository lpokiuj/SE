// This is an example of how to read a JSON Web Token from an API route
import { getToken } from "next-auth/jwt"

const secret = "secret";

export default async (req, res) => {
  const token = await getToken({ req, secret })
  if (token) {
    return res.status(200).json(token)
  } else {
    // Not Signed in
    res.status(401)
  }
  res.end()
}