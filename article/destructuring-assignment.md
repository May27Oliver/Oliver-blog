---
slug: javascript
title: 解構賦值(destructuring assignment)
description:
date: 2 Feb 2022
---

參考資料：＜從 Hook 開始，讓你的網頁 React 起來＞陳柏融著 一書 1-12 頁。

    解構賦值可以幫助開發者用簡短的語法，從陣列中提取資料，成為新的變數。
    在 React 中，解構賦值使用相當多。

### 物件的解構賦值

當我們從後台拿到一大包物件，但只需要用到其中一些屬性，這時就很適合用解構賦值。

```javascript=
const product = {
    name : 'iPhone',
    image : 'http://i.imgur.com/b3qRkiI.jpg',
    description : '全面創新的相機系統，身懷萬千本領，卻簡單易用。',
    brand : 'Apple',
    offer : {
        priceCurrency:'TWD',
        price:'26900'
    }
}

const {name,description} = product;
```

解構賦值會提取物件中有的屬性做為新的名稱，但如果名稱想要改變，可以如下改：

```javascript=
const { name : nm , description : des } = product;
console.log('nm',nm);//iPhone
console.log('des',des);//全面創新的三相機系統，身懷萬千本領，卻簡單易用。
```

### 取出物件中的物件

```javascript=
const {
    offers:{price},
} = product;

console.log(price);//26900
console.log(offers);//referencError:offers is not defined
```

如果要讓 offers 非 undefined，需一步一步提取解構的變數值：

```javascript=
const { offers } = product;
const { price } = offers;

console.log(price); // 26900
console.log(offers); // {priceCurrency:'TWD',price:'26900'}
```

### 展開語法（spread syntax）

```javascript=
const mobilePhone = {
    name:'mobile phone',
    publishedYear:'2019'
};

const iPhone = {
    ...mobilePhone,
    name : 'iPhone',//...解壓縮物件後，亦可在新物件內覆蓋解壓縮物件內原有的物件屬性
    os:'ios'
}

console.log(iPhone)//{ name: 'iPhone', publishedYear: '2019', os: 'ios' }
```

### 陣列的解構賦值

```javascript=
let [a,,c] = [1,2,3]//
console.log(a,c);//1 3
```
