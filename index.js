const typeVersionUrl = {
  npm: "https://img.shields.io/npm/v/:repo.json",
  maven: "https://img.shields.io/maven-central/v/:repo.json"
};
const xmlHttp = new XMLHttpRequest();

module.exports = (options = {}, context) => ({
  extendPageData($page) {
    const { type, repo } = options;
    const version = getLastestVersion(type, repo);
    $page.lastestVersion = version;
  }
});

function getLastestVersion(type, repo) {
  let version;
  try {
    const url = typeVersionUrl[type];
    if (url !== null && url !== undefined) {
      url.replace(/:repo/g, repo);
      xmlHttp.open("GET", url, false);
      xmlHttp.send(null);
      if (request.status === 200) {
        const json = xmlHttp.responseText;
        version = JSON.parse(json).value.replace("v", "");
      }
    }
  } catch (e) {
    console.error("get lastest version of artifact error", e);
  }
  return version;
}
