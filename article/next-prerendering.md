---
slug: Next.js
title: Pre-rendering
description:
date: 3 Feb 2022
---

    Next JS generates HTML for each page in advance

    instead of having it all done by cliient-side Javascript.

與 Create react app 不同的是，CRA 會等到 loading 完畢後才 render 畫面，但 Next.js 會在 initial load 階段就把 html 準備好。所以你在 Dev tool 裡面比較 cra 的 index.html 和 nextjs 的 index.html，前者只有一個<div className="root"></root>標籤，後者則有所有頁面的標籤。  
&nbsp;  
&nbsp;  
Create react router 只有一個 route 標籤
![](https://i.imgur.com/S1HigEB.png)
&nbsp;  
&nbsp;  
Next.js 有全部頁面的 html tag 與內容
![](https://i.imgur.com/viXVon6.png)
&nbsp;  
&nbsp;

## 為什麼需要 Pre-render?

### 1.增加使用者體驗

cra 會讓使用者看到白畫面，並等待 api 與 UI 渲染完畢，但 prerender 的好處是他會先給使用者一個有 html 的畫面，直到 api 回來畫面渲染完畢，這種使用者體驗就比全白在那邊等來得好。  
&nbsp;  
&nbsp;

### 2.協助 SEO

先給定 html 標籤有助於搜尋引擎查詢關鍵標籤的內容，增加 SEO 分數。在 CRA 內 SEO 只搜得到 root 標籤。  
&nbsp;  
&nbsp;
&nbsp;  
&nbsp;

## Next.js 提供兩種 prerendering 的渲染方式

Static Generation 和 Server-side Rendering

### Static site Generation

A method of pre-rendering where the HTML pages are generated at build time.
Next.js 在 build 成 production 時會先靜態產生每個頁面，這讓每個被產生的頁面可以被 cached 起來。

但有些頁面是必須要取得特定的資訊後才能產生的。

Nextjs 提供一個 async function api 叫 getGetStaticProps，這個 function 會在 built time 執行，取回裡面的資料 props 到預處理的頁面裡

Static Generation 的缺點是，一但要預處理的頁數很多，built time 速度就會很慢。

```js
const UserList = () => {
  return <h1>List of users</h1>;
};

export default UserList;

export async function getStaticProps({ users }) {
  const response = await fetch("url");
  const data = await response.json();
  console.log(data); //這行會在terminal執行而非browser

  return {
    //getStaticProps必須要return下面格式的資料到pages
    props: {
      users: data,
    },
  };
}
```

此外，如果我在 built time 想 fetch 資料的頁面，並同時產生新的 route url，此時還有個 async function api 可以呼叫，便是 async getSTaticPaths。

```js
export const getStaticPaths = async () => {//getStaticPaths回傳的Path屬性讓next知道要準備幾個route頁面。
  const res = await fetch("url");
  const data = await res.json();
  const paths = data.map((item) => {
    return {
      params: {
        id: item.id.toString(),
      },
    };
  });
  return {
    paths,
    fallback: false,
  };
};

//getStaticPaths的Path有幾個頁面，getStaticProps就會被呼叫幾次。
const const getStaticProps = async ({ params: { id }}) => {
  try{
    const res = await fetch("ure"+id);
    const data = await res.json();
    return {
      props:{ content:data}
    }
  }catch(e){
    console.log(e)
  }
}

const Details = ({content}) = >{
  return (
    <div>
      <h1>{content}</h1>
    </div>
  )
}
/*
Summary:
1.getStaticProps只在server端運行，可以用來預處理那些必須要fetch api才能產生的畫面，在built time的時候取得資料預先產生畫面，這也是為什麼他的console.log跑在terminal而非browser的緣故。
2.如果要搭配不同的url，則可以搭配getStaticPaths來取得要產生幾個頁面的資料，然後根據不同頁面去getStaticProps，
3.如果你的getStaticPath回傳的paths屬性陣列內有10個值，那麼就會getStaticProps 10 次。
4.所有伺服器端的語言功能都可以在getStaticProps內撰寫運行，如nodejs的fs讀取檔案的功能。
5.getStaticProps務必要有個物件回傳，
6.getStaticProps只運行在build time。
*/

```

只要 getStaticPaths 和 getStaticProps 共同使用，就可以根據不同的 url fetch 不同頁面的資料。

### Incremental Static Regeneration

Static Generation 會在 runtime 打包的 dynamic pages，但如果 Dynamic pages 有上萬頁，如一個電商網站的商品有幾百萬筆，那這樣 SSG 的 runtime built 就會大爆炸，所以只能選擇使用者最常使用的頁面進行 getStaticProps 的打包，剩下的頁面就是使用者發出 request 時才生成 html。

這個操作稱之為 Incremental Static Regeneration，透過 getStaticPaths 與其參數 fallback 的搭配實作 ISR，要實作 ISR 時，fallback 的設定務必是 true 或 blocking，官方建議使用 blocking，有利於爬蟲。

那要多久讓 getStaticProps 重新打包資料呢？如果網頁訊息更新很快，頁面來不及重新 built，使用者就會看到舊的資料，所以要設定 revalidate 這個參數。

```js
export async function getStaticProps(context) {
  const res = await fetch(`url`);
  const data = await res.json();

  return {
    props: {},
    revalidate: 1000,
  };
}
```

這裏 1000 的意思是指 1000 秒後，就會取消此頁面的快取，重新啟動 getStaticProps 進行重新打包。

參考資料：
--[Day08 - 在 Next.js 中使用 pre-rendering (getStaticProps) ](https://ithelp.ithome.com.tw/articles/10269655)

### Server-side Rendering
