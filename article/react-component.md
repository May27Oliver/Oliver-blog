---
slug: React
title: React Component
description:
date: 3 Feb 2022
---

## React 組件(Components)

Component 讓你可以分離 UI 成可重複使用的元件，每個元件之間都是獨立的。
Component 就是 js 裡的 function，他可以接受參數(稱之為 props)並回傳該渲染到畫面上的 React 元件。

component 有 functional component 和 class component。

```javascript=
import React,{Componenet} from 'react';

class Item extends Component{//這個class就是react組件
    state = { //state可以直接在組件內宣告，也可以宣告在constructor內
        x:1,
        count:0
    }
    //生命週期函式
    constructor(){
        // this.state = {
        //     x:1,
        //     count:0
        // }
    }
    componentDidMount(){
        this
    }
    componentDidUpdate(prevProps,prevState){
        this
    }
    //自定義函式
    onChange =()=>{
        this //箭頭函式的this會指向定義該函式的context，在這裡就是指向組件
    }

    render(){//組件裡一定要有個render函式
        return(<div></div>)
    }
}

//function component寫法：
//第一個字必須大寫:

const HelloReact = () =>(
    <div>
        <h1>Hello React Component</h1>
        <p>從 Hooks 開始</p>
    </div>
)

ReactDOM.render(
    <div>
        <HelloReact/>
    </div>,
    document.getElementById('root');
)

//通常組件的寫法
//最上面是state和生命週期函式
//中間是自定義函式
//最下面是render函式
```

### 組件狀態：state 與 setState

在開始前先介紹 reactjs code snippet 這個 vscode 的套件，可以快速寫出 react component

![](https://i.imgur.com/d7KHQum.png)

安裝好了後，只要輸入 rcc，就能生成即刻的 component

![](https://i.imgur.com/mD7tJjp.png)
![](https://i.imgur.com/mzCVlye.png)

```javascript=
import React, { Component } from 'react';

class Message extends Component {
    state = {//定義組件狀態在state物件裡
        title:'Message',
        text:'Hello',
    }
    sayHi = ()=>{
        //this.setState()是react內建的函式，可用來更新組件狀態，更新state
        //setState()內加入一個新物件作為參數，就會取代掉舊物件的屬性
        this.setState({
            text:'Hi' //state屬性內只會更改要改變的屬性
        })
    }
    render() {
        return (
            <div>
              <h1>{this.state.title}</h1>
              <h3>{this.state.text}</h3>
              <button onClick={this.sayHi}>Hi</button>
            </div>
        );
    }
}

export default Message;
```

### state 的更新是非同步的

當調用了 setState 後，state 不會立刻改變，會統整完所有組件內 state 有被 setState 改變的資料後才一次性的改變畫面，是故 state 引導的畫面變更是非同步的。

要保證要使用的數據是正確的數據?this.state 是靠不住的。

### Immutable

props 是唯獨的

pure function 在寫 react 是必須的。

### useState

useState 是 function component 用來記載 state 的方法：

```javascript=
import {useState} from 'react';

const defaultNumber = 10;

function App(){
    let [count,setCount] = useState(defaultNumber);
    //1.setCount 呼叫
    //2.state 改變
    //3.畫面才會重新渲染
    return (
        <div className="container">
          <div className="chevron chevron-up" onClick={()=>{setCount(count+1)}}></div>
          <div className="number">{count}</div>
          <div className="chevron chevron-down" onClick={()=>{setCount(count-1)}}></div>
        </div>
    )
}
```

### props 資料傳遞

在 import 其他模組的 jsx 模組時，會以 props 的方式傳遞資料，props 是父元件與子元件間的溝通橋梁。

再來，不論你宣告的是 class component 或 functional component，他都不會對 props 的內容進行改變，我們稱之為 pure，pure 不會更改輸入值，並當輸入項一樣的時候永遠回傳相同的結果。

在這裡用下面三個檔案作範例

```javascript=
//Item.js
import React ,{Component} from 'react'

class Item extends Component{
    render(){
        return <li>{this.props.text}</li>
    }
}

export default Item
```

```javascript=
//list.js
import React ,{Component} from 'react'
import Item from './Item'

class List extends Component{
    render(){
        return <ol>
            <Item text='早餐蛋餅'/>//text='字串'將this.props.text塞入'早餐蛋餅的值'
            <Item text='午餐水餃'/>
            <Item text='晚餐米糕'/>
            <Item text='消夜香蕉'/>
        </ol>
    }
}

export default List
```

```javascript=
//index.js
import React ,{Component} from 'react';
import {render} from 'react-dom';

import List from './List'

render(<List/>,document.getElementById('root'));
```

#### 上面三個模組渲染出來如下：

![](https://i.imgur.com/duG4CI4.png)

也可以改成如下：

```javascript=
//Item.js
import React ,{Component} from 'react'

class Item extends Component{
    render(){
        return <li>{this.props.children}</li>
    }
}

export default Item
```

```javascript=
//list.js
import React ,{Component} from 'react'
import Item from './Item'

class List extends Component{
    render(){
        return <ol>
            <Item>早餐蛋餅</Item>
            //如果要取標籤和標籤之間的值，在父層component就得用props.children
            //children表示標籤內的東西
            <Item>午餐水餃</Item>
            <Item>晚餐米糕</Item>
            <Item>消夜香蕉</Item>
        </ol>
    }
}

export default List
```

```javascript=
//index.js
import React ,{Component} from 'react';
import {render} from 'react-dom';

import List from './List'

render(<List/>,document.getElementById('root'));
```

### 印出來依舊是：

![](https://i.imgur.com/duG4CI4.png)
