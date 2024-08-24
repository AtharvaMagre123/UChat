import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.rotes.js"
//import userRoutes from "./routes/user.routes.js";
import connectToMongoDB from "./db/connectToMongoDB.js";
const app=express();
//const PORT=process.env.PORT;

dotenv.config();
app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
//app.use("/api/users", userRoutes);

app.listen(process.env.PORT, () => {
	connectToMongoDB();
	console.log(`Server Running on port ${process.env.PORT}`);
});