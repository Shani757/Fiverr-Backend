import express from "express";
import { verifyToken } from "../middleware/jwt.js";

import {
  createConversations,
  getConversation,
  getConversations,
  updateConversation,
} from "../controllers/conversation.controller.js";

const router = express.Router();

router.post("/", verifyToken, createConversations);
router.put("/:id", verifyToken, updateConversation);
router.get("/single/:id", verifyToken, getConversation);
router.get("/", verifyToken, getConversations);

export default router;
