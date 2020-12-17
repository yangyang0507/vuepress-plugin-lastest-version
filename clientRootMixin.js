import fetch from "cross-fetch";

export default {
  data: () => ({
    version: {},
    urls: {
      npm: "https://img.shields.io/npm/v/:repo.json",
      maven: "https://img.shields.io/maven-central/v/:repo.json",
    },
  }),
  methods: {
    changeVersion: function (v) {
      try {
        let repos = CONFIG.repos;
        let elements = this.$el.getElementsByClassName("content__default");
        if (elements !== undefined) {
          elements.forEach((element) => {
            var content = element.innerHTML;
            repos.forEach((repoConfig) => {
              let keywords = repoConfig.keywords;
              let version = this.version[repoConfig.repo];
              content = content.replace(keywords, version);
            });
            element.innerHTML = content;
          });
        }
      } catch (e) {
        /* do not handle for now */
      }
    },
    getLastestVersion: function (v) {
      try {
        let repos = CONFIG.repos;
        if (typeof repos !== "undefined" && repos.length > 0) {
          repos.forEach((repoConfig) => {
            let currentRepoVersion = this.version[repoConfig.repo];
            if (currentRepoVersion === undefined || currentRepoVersion === "") {
              let self = this;
              const templateUrl = this.urls[repoConfig.type];
              if (templateUrl !== null && templateUrl !== undefined) {
                const url = templateUrl.replace(/:repo/g, repoConfig.repo);
                fetch(url)
                  .then((res) => {
                    if (res.status >= 400) {
                      throw new Error("Bad response from server");
                    }
                    return res.json();
                  })
                  .then((versionInfo) => {
                    self.version[repoConfig.repo] = versionInfo.value.replace("v", "");
                  });
              }
            }
            this.changeVersion();
          });
        } else {
          console.warn("repo config is empty, ignore");
          return;
        }
      } catch (e) {
        /* do not handle for now */
      }
    },
  },

  watch: {
    version: "changeVersion",
  },

  mounted() {
    this.getLastestVersion();
  },

  updated() {
    this.getLastestVersion();
  },
};
