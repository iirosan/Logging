const assert = require("assert");
const counter = require("./counter");

describe("Tally Counter Unit Tests", function () {
  it("Task 1 & 2: Should reset to 0", function () {
    counter.reset();
    assert.strictEqual(counter.read(), 0);
  });

  it("Task 2: Should increase count", function () {
    const initial = counter.read();
    counter.increase();
    assert.strictEqual(counter.read(), initial + 1);
  });
});
