import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./db/config.js";
import ContactRoutes from "./Routes/ContactRoutes.js";

dotenv.config();
// TEMP DEBUG — remove once MONGO_URI issue is confirmed fixed
console.log("MONGO_URI:", process.env.MONGO_URI);

connectDB();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/contact", ContactRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));