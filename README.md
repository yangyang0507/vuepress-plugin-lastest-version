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
      repos: [
        {
          keywords: "mybatis-plus-latest-version",
          type: "maven",
          repo: "com.baomidou/mybatis-plus",
        }
      ]
    }
  ]
};
```

### repos.keywords

- type: string
- requried: true
- value: your keywords

The keywords which will be replaced

### repos.type

- type: string
- requried: true
- value: maven | npm

Choose which artifact type need get lastest version

### repos.repo

- type: string
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
      repos: [
        {
          keywords: "mybatis-plus-latest-version",
          type: "maven",
          repo: "com.baomidou/mybatis-plus",
        }
      ]
    }
  ]
};

module.exports = {
  plugins: [
    "lastest-version",
    {
      repos: [
        {
          keywords: "vuepress-plugin-latest-version",
          type: "npm",
          repo: "vuepress-plugin-lastest-version",
        }
      ]
    }
  ]
};
```

After configuration, the plugin will replace all keywords character to really lastest version.

So, don't forgot to add keywords placeholder to your document so that this plugin can change version normally.
