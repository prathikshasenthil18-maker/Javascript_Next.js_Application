const { RUNTIME } = require("../lib/version/runtime");
const { summarizeOrders } = require("../lib/services/orderService");
const { store } = require("../lib/store");

export default function Home() {
  const summary = summarizeOrders(store.orders);
  return (
    <main className="card">
      <h1>Next.js Application</h1>
      <p>
        Scenario <strong>1 - Monolithic</strong> · Customer Version 
        <strong>{RUNTIME.customerVersion}</strong>
      </p>
      <p>Syntax: {RUNTIME.syntaxLabel}</p>
      <p>Next: {RUNTIME.next}</p>
      <p>Active SKU: {summary.activeSku}</p>
      <p>Top score: {summary.topScore}</p>
      <p>API: <code>/api/v1/health</code>, <code>/api/v1/orders</code></p>
    </main>
  );
}
