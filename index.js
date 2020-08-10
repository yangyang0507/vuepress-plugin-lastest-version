const typeVersionUrl = {
  npm: "https://img.shields.io/npm/v/:repo.json",
  maven: "https://img.shields.io/maven-central/v/:repo.json"
};
const xmlHttp = new XMLHttpRequest();

module.exports = (options = {}, context) => ({
  extendPageData($page) {
    const { repo, type } = options;
    const version = getLastestVersion($page, repo, type);
    $page.lastestVersion = version;
  }
});

function getLastestVersion($page, repo, type) {
  let version;
  try {
    const url = typeVersionUrl[type];
    console.log(url);
    if (url === null || url === undefined) {
      return;
    }
    url.replace(/:repo/g, repo);
    xmlHttp.open("GET", url, false);
    xmlHttp.send(null);
    if (request.status === 200) {
      const json = xmlHttp.responseText;
      console.log(request.responseText);
      version = JSON.parse(json).value.replace("v", "");
    }
  } catch (e) {
    console.error("get lastest version of artifact error", e);
  }
  return version;
}
