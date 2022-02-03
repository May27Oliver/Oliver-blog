---
slug: React
title: React Ref
description:
date: 3 Feb 2022
---

## Ref，讓 React 可以操作 DOM 元素的標籤：

    首先下面的Code是一個React Input Component

```javascript=
import React, { Component } from 'react';

class input extends Component {
    render() {
        return (
            <div>
                <h3>Enter Your name</h3>
                <input type="text"/>
            </div>
        );
    }
}

export default input;
```

如果我想要一進頁面就可以讓 input 欄位的標籤 focus()，可以使用的方法就是在標籤中加上 Ref 屬性，有三種方法：

方法一，字串法，未來 React 將不支援（加在生命週期函式 ComponentDidMount()）上：

```javascript=
import React, { Component } from 'react';

class input extends Component {
    componentDidMount(){
        this.refs.myInput.focus();//在componentDidMount的函式上呼叫這個ref並focus()
    }
    render() {
        return (
            <div>
                <h3>Enter Your name</h3>
                <input type="text" ref="myInput"/>
                //在input標籤上下ref屬性，給予其一個字串
            </div>
        );
    }
}

export default input;
```

方法二，setRef()函式：

```javascript=
import React, { Component } from 'react';

class input extends Component {
    componentDidMount(){
        this.myInput.focus();
    }
    setRef = (input)=>{
    //這裡的參數Input就是ref所在的html標籤，將ref指派給叫做myInput的字串
        this.myInput = input;
    }
    render() {
        return (
            <div>
                <h3>Enter Your name</h3>
                <input type="text" ref={this.setRef}/>
            </div>
        );
    }
}

export default input;
```

方法二也可以直接寫成這樣：

```javascript=
import React, { Component } from 'react';

class input extends Component {
    setRef = (input)=>{
    console.log('input',input)//<input type="text"/>
        input.focus();//直接將傳入的input指定動作
    }
    render() {
        return (
            <div>
                <h3>Enter Your name</h3>
                <input type="text" ref={this.setRef}/>
            </div>
        );
    }
}

export default input;
```

方法三、透過'react'模組內的 createRef 來進行：

當 ref 在 render 裡被傳到一個 element 的時候，會回傳一個 current 的屬性讓 ref 指向標籤。

```javascript=
import React, { Component,createRef } from 'react';
//引入createRef

class input extends Component {
    myInput = createRef();//1.將createRef()的結果回傳給一個參數。
    componentDidMount(){
        this.myInput.current.focus();//3.在此處操作DOM節點。
    }
    render() {
        return (
            <div>
                <h3>Enter Your name</h3>
                <input type="text" ref={this.myInput}/>
                //2.將該參數帶入標籤中的ref內
            </div>
        );
    }
}

export default input;
```

如果是 functional Component，則可以用 useRef。

```typescript
const animation: React.FC = () => {
  const elRef = React.useRef<HTMLDivElement>(null);
  return <div ref={elRef}></div>;
};
```

## 如果想從父層一次取得多個子層的 ref，可以用 callback ref

在父層你可以先建立一個空陣列，裡面用來裝子層 ref，這個空陣列可以以 state 抑或 ref 做儲存。

然後 prop 到子層取 ref。

[附上實作後的 Sandbox 連結](https://codesandbox.io/s/autumn-wildflower-cct4b?file=/src/Parent.js)

```javascript
const Parent = () => {
  // 1.Ref
  // const child_arr = React.useRef([null, null, null, null, null, null, null]);
  // console.log("child_arr out of useEffect", child_arr.current);

  // useEffect(() => {
  //   console.log("child_arr in useEffect", child_arr);
  // }, [child_arr.current]);

  // return child_arr.current.map((item, index) => (
  //   <Child
  //     key={index}
  //     divRef={(el) => {
  //       child_arr.current[index] = el;
  //     }}
  //   />
  // ));

  // 2.State
  const [childArr, setChildArr] = React.useState([
    null,
    null,
    null,
    null,
    null,
    null,
    null,
  ]);

  useEffect(() => {
    console.log("child_arr in useEffect", childArr);
  }, [childArr]);

  return (
    <div className="parent">
      {childArr.map((item, index) => (
        <Child
          key={index} //key最好別用index，但這裡的重點不是這個就先將就
          divRef={(el) => {
            setChildArr((prev) => {
              prev[index] = el;
              return prev;
            });
          }}
        />
      ))}
    </div>
  );
};

const Child = ({ divRef }) => {
  return <div className="child-cp" ref={divRef}></div>;
};
```

參考文件：
[React 官方文件](https://zh-hant.reactjs.org/docs/refs-and-the-dom.html?fbclid=IwAR08qMEXOV99dTQnz-grB7G-CRQ6ltzFmS7ZXaMzyeDP-28B_Ij4cB-Lc3s#legacy-api-string-refs)
