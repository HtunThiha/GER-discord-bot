import express from "express";
import interactionsRoute from "./interactionsRoute.ts";

const router = express.Router();

router.use('/interactions', interactionsRoute);

export default router;