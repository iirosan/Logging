const express = require("express");
const logger = require("./logger");
const routes = require("./routes");

const app = express();
const PORT = 3000;

logger.info("[MAIN] Starting");

app.use("/", routes);

const server = app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

// Stopping-loki kun prosessi suljetaan (esim. Ctrl+C)
process.on("SIGINT", () => {
  logger.info("[MAIN] Stopping");
  server.close(() => {
    process.exit(0);
  });
});
