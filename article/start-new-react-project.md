---
slug: React
title: 如何開始一個新的React專案
description:
date: 2 Feb 2022
---

[官方文件連結 1](https://zh-hant.reactjs.org/docs/create-a-new-react-app.html)

[如何在 react 專案中使用 css](https://create-react-app.dev/docs/adding-css-reset)
&nbsp;

    在下載好 node.js 後，開一個專案資料夾，終端機執行以下程式碼：

```javascript
npx create-react-app 專案名稱

//也可以寫這樣
npm i -g create-react-app

//上面這段跑完後再輸入：
create-react-app my-app

//如果要建立typescript專案
npx create-react-app '專案名稱' --template typescript
```

成功便會出現以下提示：
![](https://i.imgur.com/Z1JPeAC.png)

#### Yes,happy hacking!!

接著輸入：

```javascript
npm start
```

在 localhost:3000 就會出現這個畫面

![](https://i.imgur.com/x8kytkw.png)

再來來看看檔案的結構：

package.json

這個檔案設定專案程式的相依性，所謂相依性就是指這個專案會引用那些套件模組，在這裡就是 react，package.json 內會顯示當前下載的 react 的版本。

看到 public 資料夾內，有 index.html 這個檔案，就是開起 localhost 的首頁。

找到 id="root"這個標籤，所有 react 的畫面渲染都會從這個標籤開始。

![](https://i.imgur.com/c5ipK8F.png)

### 撰寫 React 時好用的 vscode tool

#### 1. Simple React Snippet

![](https://i.imgur.com/a9VqlNs.png)

#### 2. Prettier - code formatter

![](https://i.imgur.com/vhGpaK5.png)

### 開始撰寫 React.js 程式

來看一下檔案目錄及其意義：
![](https://i.imgur.com/ezjBOib.png)

1.node_modules 資料夾是第三方函式庫。  
2.public 資料夾內存放跟網站有關的圖片與首頁 html。  
3.src 裡則寫入要執行 React 的 javascript 檔。

先從 src 資料夾開始，如果剛執行完 npx create-react-app ，請先將 src 資料夾內清空。
