const { expect } = require("chai");
const { summarizeOrders, createOrder } = require("../lib/services/orderService");
describe("orderService", function () {
  it("summarizes", function () {
    const summary = summarizeOrders([
      { sku: "a", active: false, score: 10 },
      { sku: "b", active: true, score: 40 },
    ]);
    expect(summary.activeSku).to.equal("b");
    expect(summary.topScore).to.equal(40);
  });
  it("creates", function () {
    const order = createOrder({ sku: "kit", score: 12 });
    expect(order.sku).to.equal("KIT");
    expect(order.id).to.equal("ord_kit");
  });
});
