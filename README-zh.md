# vuepress-plugin-lastest-version

[![npm](https://img.shields.io/npm/v/vuepress-plugin-lastest-version?style=flat-square)](https://www.npmjs.com/package/vuepress-plugin-lastest-version) [![npm](https://img.shields.io/npm/dm/vuepress-plugin-lastest-version?style=flat-square)](https://www.npmjs.com/package/vuepress-plugin-lastest-version) [![GitHub](https://img.shields.io/github/license/yangyang0507/vuepress-plugin-lastest-version?style=flat-square)](https://www.npmjs.com/package/vuepress-plugin-lastest-version)

为你的文档获取最新的制品版本

## 安装

```shell
yarn add -D vuepress-plugin-lastest-version
# OR npm install -D vuepress-plugin-lastest-version
```

## 使用

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

- 类型: string
- 默认值: maven
- 是否必须: true
- 可选值: maven | npm

选择你需要获取最新版本的制品类型

### repo

- 类型: string
- 默认值: com.baomidou/mybatis-plus
- 是否必须: true
- 可选值: your repo

当制品类型是 maven 时，你的 repo 配置应该为 :groupId/:artifactId
当制品类型是 npm 时，你的 repo 配置应该为 :packageName

示例

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

在配置好插件之后，插件将会替换所有的 `lastest-version` 字符为最新的制品版本号，所以别忘了在你的文档中加入 `lastest-version` 占位符以保证插件能够正常替换版本号。
