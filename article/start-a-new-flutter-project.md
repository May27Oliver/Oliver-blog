---
slug: flutter
title: Start a new flutter project
description:
date: 27 January 2022
---

## 資料夾介紹

![](https://i.imgur.com/a5UIwhZ.png)

    android / ios 資料夾： 撰寫原生程式碼的地方。

    build : build完的APK會放在這裡。

    lib 資料夾：所有的flutter檔案都放這。

    pubspec.yaml:管理第三方套件檔案。

    安裝Xcode還要順邊安裝cocopods這個套件

    若要flutter專案能夠同時開起ios系統和android系統，則需要先從xcode和android studio的AVD Manager把模擬器打開。

## Hello Flutter!

課程網址：
https://tw-hkt.blogspot.com/2019/11/flutter-30-day-4-flutter-hello-world.html

```javascript=
import 'package:flutter/material.dart';
// flutter for google UI的套件
//main 是 Dart的程式進入點
void main(){
    //runApp是flutter的程式進入點，若沒載入material函式庫，將不認識runApp。
    //放在Center容器裡面Text的元件,將被放置在畫面中間
    runApp(Center(
        child:Text(
        '第一個App',
        textDirection:TextDirection.ltr,
        ),
    ));
    //寫runApp會自動幫我們載入'package:flutter/material.dart'
    //Center()是個widget元件，會把所有東西放在畫面中央。
    //child是Center的屬性之一
    //Text是文字元件
    //Text第二個參數要寫text的方向textDirection:TextDirection.ltr
    //ltr,是left to right的意思。
}
```

```javascript=
import 'package:flutter/material.dart';

main() {
    //MaterialApp是google出的UI庫，Flutter自然也有這套UI Liberary，幾乎所有的flutter專案都會用上MaterialApp
  runApp(MaterialApp(
    home:Scaffold(
      appBar: AppBar(
        title:Text("第一個app"),
      ),
      body:Center(
        child:Text('Hello打扣打'),
      )
    )
  ));
}
```
