import express from "express";
import mainRoute from "./routes/mainRoute.ts";

const app = express();

app.use('/api', mainRoute);

export default app;