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

- 类型: string
- 是否必须: true
- 可选值: your keywords

将要被替换的关键字

### repos.type

- 类型: string
- 是否必须: true
- 可选值: maven | npm

选择你需要获取最新版本的制品类型

### repos.repo

- 类型: string
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

在配置好插件之后，插件将会替换所有的配置中定义的关键字字符为最新的制品版本号，所以别忘了在你的文档中加入关键字占位符以保证插件能够正常替换版本号。
