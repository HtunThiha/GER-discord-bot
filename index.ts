import app from "./src/app.ts";

const PORT: number = parseInt(process.env.PORT) || 3000;

app.listen(PORT, () => {
    console.log("\n=====================================");
    console.log(`🌐 Server listening on port ${PORT}`);
    console.log(`🚀 API URL: http://localhost:${PORT}/api`);
    console.log("=====================================\n");
});