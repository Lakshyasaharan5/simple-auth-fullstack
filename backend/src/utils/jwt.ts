import jwt from "jsonwebtoken";

const JWT_SECRET = "super-secret-key"; // later → env var

export function signToken(payload: object) {
  return jwt.sign(payload, JWT_SECRET, {
    expiresIn: "1h",
  });
}

export function verifyToken(token: string) {
  return jwt.verify(token, JWT_SECRET);
}
