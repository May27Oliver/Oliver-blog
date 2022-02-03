---
slug: React
title: 什麼是JSX
description:
date: 2 Feb 2022
---

    JSX就是React用來產生dom元素時所用的語法，如果進行typescript專案的話，則稱為tsx。

找到 src/index.js 檔案，這隻檔案將變成這個專案的程式起始點。

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
