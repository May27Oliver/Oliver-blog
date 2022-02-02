---
slug: Command tools
title: npm and yarn
description:
date: 2 Feb 2022
---

    npm 和 yarn 都是在安裝前端套件時常用的 command tools，我自己比較常用 yarn。
    以下介紹些簡易的 npm 與 yarn 語法：

### 在 package.json 中安裝新的 package 包，增加 dependency 內容。

```javascript=
npm install {該套件名稱} --save
//或
yarn add {該套件名稱}
```

### 在 package.json 新增/安装新的套件:

```javascript=
npm install {該套件名稱} --save
//或
yarn add {該套件名稱}
```

### 向 package.json 安裝新的套件:

```javascript=
npm install {該套件名稱} --save-dev
//或
yarn add {該套件名稱} --dev
```

### 刪除套件:

```javascript=
npm uninstall package --save
//或
yarn remove package
```

### 刪除 node_module

```javascript=
$ rm -rf node_modules
$ rm package-lock.json
$ npm install
```

### 升版某個套件:

```javascript=
npm update --save
//或
yarn upgrade
```

### 全局地安裝某套件（慎用）:

```javascript=
npm install package -g
//或
yarn global add package
```
