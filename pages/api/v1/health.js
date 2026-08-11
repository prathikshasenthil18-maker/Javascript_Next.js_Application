const { RUNTIME } = require("../../../lib/version/runtime");

export default function handler(req, res) {
  if (req.method !== "GET") {
    res.setHeader("Allow", ["GET"]);
    return res.status(405).json({ error: "method_not_allowed" });
  }
  return res.status(200).json({
    ok: true,
    customerVersion: RUNTIME.customerVersion,
    syntax: RUNTIME.syntaxLabel,
    projectType: RUNTIME.projectType,
    next: RUNTIME.next,
  });
}
