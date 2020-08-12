import fetch from "cross-fetch";

export default {
  data: () => ({
    version: "latest-version",
    urls: {
      npm: "https://img.shields.io/npm/v/:repo.json",
      maven: "https://img.shields.io/maven-central/v/:repo.json",
    },
  }),
  methods: {
    changeVersion: function (v) {
      try {
        this.$el.innerHTML = this.$el.innerHTML.replace(
          /latest-version/g,
          this.version
        );
      } catch (e) {
        /* do not handle for now */
      }
    },
    getLastestVersion: function (v) {
      try {
        if (this.version === "latest-version") {
          let self = this;
          const templateUrl = this.urls[TYPE];
          if (templateUrl !== null && templateUrl !== undefined) {
            const url = templateUrl.replace(/:repo/g, REPO);
            fetch(url)
              .then((res) => {
                if (res.status >= 400) {
                  throw new Error("Bad response from server");
                }
                return res.json();
              })
              .then((versionInfo) => {
                self.version = versionInfo.value.replace("v", "");
              });
          }
        }
        this.changeVersion();
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
