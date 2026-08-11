const RUNTIME = {
  customerVersion: 18,
  syntaxLabel: "ES2022 / Node.js 18",
  language: "javascript",
  projectType: "Next.js Application",
  scenario: "1 - Monolithic",
  enginesNode: ">=18",
  next: "14.2.18",
};
function assertCompatibleNode() {
  const major = Number(process.versions.node.split(".")[0]);
  if (Number.isNaN(major)) throw new Error("unable_to_read_node_version");
  const minHost = 18 > 24 ? 24 : 18;
  if (major < minHost) {
    throw new Error(
      "node_too_old: need >=" + minHost + " (target 18), found " + process.versions.node,
    );
  }
  return { hostMajor: major, targetMajor: 18, minHost: minHost };
}
module.exports = { RUNTIME, assertCompatibleNode };
