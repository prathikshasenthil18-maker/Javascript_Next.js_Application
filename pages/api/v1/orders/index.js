const { store } = require("../../../../lib/store");
const orderService = require("../../../../lib/services/orderService");

export default function handler(req, res) {
  if (req.method === "GET") {
    return res.status(200).json({
      data: store.orders,
      summary: orderService.summarizeOrders(store.orders),
    });
  }
  if (req.method === "POST") {
    try {
      const order = orderService.createOrder(req.body || {});
      store.orders.push(order);
      return res.status(201).json({ data: order });
    } catch (err) {
      return res.status(400).json({
        error: String(err && err.message ? err.message : err),
      });
    }
  }
  res.setHeader("Allow", ["GET", "POST"]);
  return res.status(405).json({ error: "method_not_allowed" });
}
