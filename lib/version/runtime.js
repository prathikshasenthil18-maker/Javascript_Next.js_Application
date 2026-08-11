const RUNTIME = {
  customerVersion: 12,
  syntaxLabel: "ES2019 / Node.js 12",
  language: "javascript",
  projectType: "Next.js Application",
  scenario: "1 - Monolithic",
  enginesNode: ">=12",
  next: "14.2.18",
};
function assertCompatibleNode() {
  const major = Number(process.versions.node.split(".")[0]);
  if (Number.isNaN(major)) throw new Error("unable_to_read_node_version");
  const minHost = 12 > 24 ? 24 : 12;
  if (major < minHost) {
    throw new Error(
      "node_too_old: need >=" + minHost + " (target 12), found " + process.versions.node,
    );
  }
  return { hostMajor: major, targetMajor: 12, minHost: minHost };
}
module.exports = { RUNTIME, assertCompatibleNode };
