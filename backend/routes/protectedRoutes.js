import express from "express";
import { checkRole, verifyToken } from "../middlewares/middle.js";

const protectedRouter = express.Router();

protectedRouter.get("/admin", verifyToken, checkRole("admin"), (req, res) => {
  console.log(req.header);
  res.json({ message: "Welcome, Admin!" });
});

protectedRouter.get(
  "/shipper",
  verifyToken,
  checkRole("admin", "shipper"),
  (req, res) => {
    res.json({ message: "Welcome, Shipper!" });
  }
);

protectedRouter.get(
  "/carrier",
  verifyToken,
  checkRole("admin", "carrier"),
  (req, res) => {
    res.json({ message: "Welcome, Carrier!" });
  }
);

export default protectedRouter;
