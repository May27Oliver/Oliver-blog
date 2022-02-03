---
slug: Codepen Practice
title: React Navbar練習
description:
date: 3 Feb 2022
---

[codepen 連結](https://codepen.io/Oliver-Chen/pen/pobLyNO?fbclid=IwAR3P3qpszpt7uguk7WPEYnY4--q08Pib5p8MYQPL-TZa5vF4ZDlVevONy0U)

[github 連結](https://github.com/May27Oliver/react_navbar_practice)

這個練習的技術點：
可以利用 JS Array 方法中的 map()方法來實作 React 中相當於 Vue.js 的 v-for 與 Angular 的 NgRepeat，將陣列資料渲染在 html 標籤上。

另外，當 map 出 component 時，每個 component 必須要有個獨一無二的 key 值，不可等於 index，是故，除了後端回傳的資料表 id，也可透過＂uuid＂這個套件為每個 map 的 item 自動產生 key 值。

```javascript=
npm install uuid
```

![](https://i.imgur.com/zxruCym.png)

在此附上可以快速查詢 React components 內的 props 值的 google 套件：

```
React Developer Tools
```

去 google 商店下載吧！
![](https://i.imgur.com/FMPEJ3R.png)
