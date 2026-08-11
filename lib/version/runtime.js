const RUNTIME = {
  customerVersion: 24,
  syntaxLabel: "ES2024+ / Node.js 24",
  language: "javascript",
  projectType: "Next.js Application",
  scenario: "1 - Monolithic",
  enginesNode: ">=24",
  next: "14.2.18",
};
function assertCompatibleNode() {
  const major = Number(process.versions.node.split(".")[0]);
  if (Number.isNaN(major)) throw new Error("unable_to_read_node_version");
  const minHost = 24 > 24 ? 24 : 24;
  if (major < minHost) {
    throw new Error(
      "node_too_old: need >=" + minHost + " (target 24), found " + process.versions.node,
    );
  }
  return { hostMajor: major, targetMajor: 24, minHost: minHost };
}
module.exports = { RUNTIME, assertCompatibleNode };
