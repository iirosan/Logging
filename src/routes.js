const express = require("express");
const router = express.Router();
const logger = require("./logger");
const counter = require("./counter");

// Middleware lokitukseen jokaista kutsua varten
router.use((req, res, next) => {
  logger.info(`[ENDPOINT] ${req.method} '${req.originalUrl}'`);
  next();
});

router.get("/counter-increase", (req, res) => {
  const val = counter.increase();
  res.json({ count: val });
});

router.get("/counter-read", (req, res) => {
  const val = counter.read();
  res.json({ count: val });
});

router.get("/counter-reset", (req, res) => {
  const val = counter.reset();
  res.json({ count: val });
});

module.exports = router;
