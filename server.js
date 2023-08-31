import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoute from "./route/user.route.js";
import conversationRoute from "./route/conversation.route.js";
import gigRoute from "./route/gig.route.js";
import messageRoute from "./route/message.route.js";
import orderRoute from "./route/order.route.js";
import reviewsRoute from "./route/review.route.js";
import authRoute from "./route/auth.route.js";
import cookieParser from "cookie-parser";
import cors from "cors";
const app = express();

dotenv.config();
try {
  await mongoose.connect(process.env.MONGO);
  console.log("DB connection passed!");
} catch (error) {
  console.log("Cannot connect to DB!");
}
app.use(cors({ origin: "http://localhost:5173", credentials: true }));


app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/conversations", conversationRoute);
app.use("/api/gigs", gigRoute);
app.use("/api/messages", messageRoute);
app.use("/api/orders", orderRoute);
app.use("/api/reviews", reviewsRoute);

app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Something went wrong!";
  return res.status(errorStatus).send(errorMessage);
});

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`App started on port ${port}`);
});
