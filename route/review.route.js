import express from "express"

import {verifyToken} from "../middleware/jwt.js"

import { createReview, getReview, deleteReview } from "../controllers/reviews.controller.js"

const router = express.Router()

router.post("/", verifyToken, createReview) 
router.get("/:id", verifyToken, getReview) 
router.delete("/:id", verifyToken, deleteReview) 

export default router