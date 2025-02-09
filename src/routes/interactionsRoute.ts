import { config } from "dotenv";
import express from "express";
import { verifyKeyMiddleware } from "discord-interactions";
import handleDiscordInteractionRequests from "../controllers/interactionsController.ts";

config();

const router = express.Router();

router.post('/',
    verifyKeyMiddleware(process.env.PUBLIC_KEY),
    handleDiscordInteractionRequests
);

export default router;