const RUNTIME = {
  customerVersion: 14,
  syntaxLabel: "ES2020 / Node.js 14",
  language: "javascript",
  projectType: "Next.js Application",
  scenario: "1 - Monolithic",
  enginesNode: ">=14",
  next: "14.2.18",
};
function assertCompatibleNode() {
  const major = Number(process.versions.node.split(".")[0]);
  if (Number.isNaN(major)) throw new Error("unable_to_read_node_version");
  const minHost = 14 > 24 ? 24 : 14;
  if (major < minHost) {
    throw new Error(
      "node_too_old: need >=" + minHost + " (target 14), found " + process.versions.node,
    );
  }
  return { hostMajor: major, targetMajor: 14, minHost: minHost };
}
module.exports = { RUNTIME, assertCompatibleNode };
