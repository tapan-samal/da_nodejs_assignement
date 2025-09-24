import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import  userRouter from "./routes/userRouter.js";
import  noteRouter from "./routes/noteRouter.js";
import { errorMiddleware } from "./middlewares/errorHandler.js";
import dbConnection from "./config/dbConnection.js";
dotenv.config();

const PORT = process.env.PORT || 4002;
dbConnection();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use("/user", userRouter);
app.use("/note", noteRouter);

app.use(errorMiddleware);

app.listen(PORT, () => {
  console.log(`Application listening on port ${PORT}!`);
});