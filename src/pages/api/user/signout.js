import { serialize } from "cookie";

export default async function handler(req, res) {
  const maxAge = 0; // Cookie expiration time in seconds (1 hour)
  const serializedCookie = serialize("token", "", {
    maxAge,
    path: "/",
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
  });
  res.setHeader("Set-Cookie", serializedCookie);
  res.json({status:'logout'})
}
