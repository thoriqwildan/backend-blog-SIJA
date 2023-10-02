import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import router from "../routes/UserRoute.js";
dotenv.config();

const app = express();

app.use(cors({ credentials: true, origin: "http://localhost:3000" }));
app.use(express.json());
app.use(router);

app.listen(5000, () => console.log("Backend Running in port 5000"));
