import express from "express";
import { Login, Register } from "../controllers/Users.js";

const router = express.Router();

router.post("/admin", Login);
router.post("/register", Register);

export default router;
