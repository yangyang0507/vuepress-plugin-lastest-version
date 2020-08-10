import fetch from "cross-fetch";

export default {
  data: () => ({
    version: "latest-version",
    urls: {
      npm: "https://img.shields.io/npm/v/:repo.json",
      maven: "https://img.shields.io/maven-central/v/:repo.json"
    }
  }),

  created() {
    try {
      let that = this;
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
            that.version = versionInfo.value.replace("v", "");
          });
      }
    } catch (e) {
      /* do not handle for now */
    }
  },

  updated() {
    this.$el.innerHTML = this.$el.outerHTML.replace(
      /latest-version/g,
      this.version
    );
  }
};
