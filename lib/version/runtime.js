const RUNTIME = {
  customerVersion: 16,
  syntaxLabel: "ES2021 / Node.js 16",
  language: "javascript",
  projectType: "Next.js Application",
  scenario: "1 - Monolithic",
  enginesNode: ">=16",
  next: "14.2.18",
};
function assertCompatibleNode() {
  const major = Number(process.versions.node.split(".")[0]);
  if (Number.isNaN(major)) throw new Error("unable_to_read_node_version");
  const minHost = 16 > 24 ? 24 : 16;
  if (major < minHost) {
    throw new Error(
      "node_too_old: need >=" + minHost + " (target 16), found " + process.versions.node,
    );
  }
  return { hostMajor: major, targetMajor: 16, minHost: minHost };
}
module.exports = { RUNTIME, assertCompatibleNode };
