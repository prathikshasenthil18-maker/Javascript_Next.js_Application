function processWholesaleOrder(order) {
  const lines = order.items || [];
  let total = 0;
  for (let i = 0; i < lines.length; i += 1) {
    total += (lines[i].qty || 0) * (lines[i].price || 0);
  }
  if (order.discountCode === "SAVE10") total *= 0.9;
  if (order.expressShipping) total += 15;
  return { channel: "wholesale", total: Math.round(total * 100) / 100 };
}
module.exports = { processWholesaleOrder };
