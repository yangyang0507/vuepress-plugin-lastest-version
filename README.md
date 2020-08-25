# vuepress-plugin-lastest-version

[![npm](https://img.shields.io/npm/v/vuepress-plugin-lastest-version?style=flat-square)](https://www.npmjs.com/package/vuepress-plugin-lastest-version) [![npm](https://img.shields.io/npm/dm/vuepress-plugin-lastest-version?style=flat-square)](https://www.npmjs.com/package/vuepress-plugin-lastest-version) [![GitHub](https://img.shields.io/github/license/yangyang0507/vuepress-plugin-lastest-version?style=flat-square)](https://www.npmjs.com/package/vuepress-plugin-lastest-version)

Get lastest version of artifact for your vuepress doc

## Install

```shell
yarn add -D vuepress-plugin-lastest-version
# OR npm install -D vuepress-plugin-lastest-version
```

## Use

```javascript
module.exports = {
  plugins: [
    "lastest-version",
    {
      type: "maven",
      repo: "com.baomidou/mybatis-plus",
    },
  ],
};
```

### type

- type: string
- default: maven
- requried: true
- value: maven | npm

Choose which artifact type need get lastest version

### repo

- type: string
- default: com.baomidou/mybatis-plus
- requried: true
- value: your repo

When type is maven, your repo value is :groupId/:artifactId
When type is npm, your repo value is :packageName

e.g.

```javascript
module.exports = {
  plugins: [
    "lastest-version",
    {
      type: "maven",
      repo: "com.baomidou/mybatis-plus",
    },
  ],
};

module.exports = {
  plugins: [
    "lastest-version",
    {
      type: "npm",
      repo: "vuepress-plugin-lastest-version",
    },
  ],
};
```

After configuration, the plugin will replace all `lastest-version` character to really lastest version.

So, don't forgot to add `lastest-version` placeholder to your document so that this plugin can change version normally.
