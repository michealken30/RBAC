import mongoose from "mongoose";

const rolesSchema = new mongoose.Schema({
  name: { type: String, required: true },
  permissions: [String],
});

const Role = mongoose.model("Role", rolesSchema);

export default Role;
