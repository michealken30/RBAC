import express from "express";
import mongoose from "mongoose";
import protectedRouter from "./routes/protectedRoutes.js";
import rolesRouter from "./routes/roleRoutes.js";
import authRouter from "./routes/authRoutes.js";
import cors from "cors";

const app = express();

const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

mongoose
  .connect(
    "mongodb+srv://kennethoshogwe:ygkKmuYa1tU7guW2@cluster0.c8jsy.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => console.log("mongodb connected"))
  .catch(() => console.log("Error connecting to MongoDB"));

app.use("/auth", authRouter);
app.use("/roles", rolesRouter);
app.use("/protected", protectedRouter);

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(port, () => {
  console.log("server is runing on port", port);
});
