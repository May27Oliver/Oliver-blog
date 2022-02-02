---
slug: React
title: 如何開始一個新的React專案
description:
date: 2 Feb 2022
---

[官方文件連結 1](https://zh-hant.reactjs.org/docs/create-a-new-react-app.html)

[官方文件連結 2](https://create-react-app.dev/docs/adding-css-reset)
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

新增 index.js 檔案，這隻檔案將變成這個專案的程式起始點。

在 index.js 上寫上

```javascript=
import React from "react"; //引入react模組，引入之後將能使用JSX語法
import ReactDOM from "react-dom"
//引入react-dom模組，引入後將能使用renderDOM方法把jsx語法渲染到畫面上
```

### JSX 語法：

參考網站：
React 篇: HelloWorld 解說與 JSX 語法
https://eyesofkids.gitbooks.io/react-basic-zh-tw/content/day15_jsx/

```
React的核心概念中有兩個，一個是React Element(元素)，

另一個是React Component(元件)，兩者都是虛擬DOM中的東西。

React Element(元素)是其中最基本的概念。
```

寫法：

```javascript=
const element = <h1>Hello World</h1>
```

這串文字就是 JSX 語法中的 React Element（元素），乍看之下不符合編碼模式，但由於有引入 react 模組的緣故，會自動將其編譯為以下句型：

```javascript=
const element = React.createElement('h1',null,'Hello World');

```

React Element 是描述虛擬 DOM 的物件，只有單純敘述性質，不帶方法，prototype 中也沒有其他東西，只有四個元素描述 DOM 元素：

type:要建立的 html 標籤的名稱在此用字串表示，如"div"，"h1"，或是任何 react 程式中的元件。

props:就是 property 的意思，對應到 element 的屬性值。

key:識別屬性。

ref : React 用來存取對應實體 DOM 的屬性。

### 每個 html 標籤在 JSX 內務必要有結尾

```javascript=
class App extends Component{
    state = {
        count:1,
    }
    onClick(){

    }
    render(){
        return(
        <div></div>
        <input type="checkbox" id="check"/>
        <label htmlFor="check"></label> //跟for迴圈衝突，這裡要寫htmlFor
        <img src='' className='app-logo' />
        <input type = 'text' />
        <button onClick={this.onClick}>{this.state.count}</button>
        //JSX可以用大括號做出表達式的空間，這裡就可以用來寫onClick函式
        //原本在html檔裡面可以一個標籤結尾的標籤在JSX內要加上/結尾
        )
    }
}

//JSX html一定要結尾
//JSX html可以/結尾，div、input都可以
//class命名在JSX內要以className來命名
//<label for=""></label>在JSX語法內要寫htmlFor，<label htmlFor="check"></label>
//JSX變形
//1.變數命名法：
const helloReact = (<h1>Hello React</h1>);

ReactDOM.render(
    <div>
        {helloReact}
    </div>,
    document.getElementById('root');
)

//2.函式回傳JSX：
const helloReact = (language) => (
     <div>
        <h1>Hello {language}</h1>
        <p>從 Hooks 開始</p>
    </div>
);

ReactDOM.render(
    <div>
        {helloReact('Vue')}
    </div>,
    document.getElementById('root');
)
```

### index.js in src 資料夾

開始 react 專案後，有個 src 資料夾，在終端機輸入 npm start 後，webpack 會進入資料夾內找尋 index.js 這個檔案，並以這個檔案作為程式起始點。

![](https://i.imgur.com/Pw02TsP.png)

### 插播 Javascript export 和 import

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
