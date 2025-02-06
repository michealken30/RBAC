import jwt from "jsonwebtoken";
import User from "../models/user.js";

const verifyToken = async (req, res, next) => {
  const token = req.header("Authorization")?.replace("Bearer ", "").trim();

  if (!token) {
    return res.status(401).send("No token provided");
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    // Fetch the user with their role details
    const user = await User.findById(decoded.id).populate("role");
    if (!user) {
      return res.status(404).send("User not found");
    }
    req.user = user; // Now req.user contains the whole user document including role
    next();
  } catch (error) {
    console.log("Token verification error:", error);
    return res.status(401).send("Invalid token");
  }
};

const checkRole = (...roles) => {
  return (req, res, next) => {
    // Assuming req.user.role is populated and has a "name" field
    if (!roles.includes(req.user.role.name)) {
      console.log("User role:", req.user.role.name);
      return res.status(403).send("Forbidden");
    }
    next();
  };
};

export { verifyToken, checkRole };
