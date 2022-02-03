---
slug: Javascript
title: Import和Export
description:
date: 3 Feb 2022
---

    export 和 import 是 javascript 用來模組化管理程式碼的語法，可以 import 和 export 不同檔案的程式。

#### export default

每個 javascript 檔案有一個 export default，這個輸出目錄下的檔案在其他檔案內 import 時可以自動更名：

```javascript=
//假設這是moduleB.js檔案
const useful_tool = {
    proper1:x => x*2,
    triple: y => y/2,
    jojo : (s,w) => s*w
}

export default useful_tool;
```

```javascript=
//假設這是main.js檔案
import b from "./moduleB"//將moduleB.js輸出的default命名為b，.js可以省略

console.log(b.proer1(1));//2
```

#### named export 命名輸出

```javascript=
//假設這是moduleB.js檔案
export const lee = 1123;
export const che = 2233;
```

```javascript=
//假設這是main.js檔案
import {lee as l,che as c} from "./moduleB"
//將moduleB.js輸出的name lee和che命名為l和c

console.log(l,c);//1123 , 2233
```
