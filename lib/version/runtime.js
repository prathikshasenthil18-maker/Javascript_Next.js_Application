const RUNTIME = {
  customerVersion: 22,
  syntaxLabel: "ES2024 / Node.js 22",
  language: "javascript",
  projectType: "Next.js Application",
  scenario: "1 - Monolithic",
  enginesNode: ">=22",
  next: "14.2.18",
};
function assertCompatibleNode() {
  const major = Number(process.versions.node.split(".")[0]);
  if (Number.isNaN(major)) throw new Error("unable_to_read_node_version");
  const minHost = 22 > 24 ? 24 : 22;
  if (major < minHost) {
    throw new Error(
      "node_too_old: need >=" + minHost + " (target 22), found " + process.versions.node,
    );
  }
  return { hostMajor: major, targetMajor: 22, minHost: minHost };
}
module.exports = { RUNTIME, assertCompatibleNode };
