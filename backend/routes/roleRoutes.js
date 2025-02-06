import express from "express";
import Role from "../models/roles.js";
import e from "express";

const rolesRouter = express.Router();

// Get all roles

rolesRouter.get("/", async (req, res) => {
  try {
    const roles = await Role.find({});
    res.json(roles);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// create a new role
rolesRouter.post("/create", async (req, res) => {
  const { name, permissions } = req.body;
  const role = new Role({ name, permissions });
  await role.save();
  res.json({ message: "Role created successfully" });
});

export default rolesRouter;
