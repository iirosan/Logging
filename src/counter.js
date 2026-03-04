const logger = require("./logger");

let count = 0;

const counter = {
  increase: () => {
    count++;
    logger.info(`[COUNTER] increase ${count}`);
    return count;
  },
  read: () => {
    logger.info(`[COUNTER] read ${count}`);
    return count;
  },
  reset: () => {
    count = 0;
    logger.info(`[COUNTER] zeroed ${count}`);
    return count;
  },
};

module.exports = counter;
