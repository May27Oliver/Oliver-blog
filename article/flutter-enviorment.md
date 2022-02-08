---
slug: Flutter
title: Flutter Enviorment
description:
date: 3 Feb 2022
---

    本文介紹如何搭建Dart && Flutter開發環境

Why flutter?  
以跨平台來說，flutter 的執行效率比 React Native 快上許多:  
https://www.youtube.com/watch?v=kjvfqfNadcM

&nbsp;  
&nbsp;
Flutter 在定位上不僅僅是跨平台的 UI 框架，Google 在 2020 年推出的新作業系統 Fuchsia 的介面就是以 Flutter 為核心打造，Fuchsia 這個作業系統將會應用到 google 在未來所有物聯網相關的產品上。
甚至市場預期它將取代 java 成為新的非 apple 系手機語言。

過年期間 flutter 推出 2.10 版，正式跨平台跨到 Windows

&nbsp;  
&nbsp;

## 因為只有 Mac 能完全實現雙平台開發，本文只介紹 mac 安裝 dart && Flutter 開發環境

&nbsp;  
&nbsp;

### 步驟一：安裝指南，到下列網頁：

https://docs.flutter.dev/get-started/install

![](https://i.imgur.com/ADHYgJ7.png)
&nbsp;  
&nbsp;

### 步驟二：下載 Flutter_macos 壓縮檔

&nbsp;  
&nbsp;  
![](https://i.imgur.com/BXYMvT4.png)
&nbsp;  
&nbsp;

### 步驟三：下載好後的壓縮檔解壓縮，到你 mac 姓名目錄下開一個 Developer 資料夾，把解壓縮的 flutter 資料夾丟進去

&nbsp;  
&nbsp;  
依我的目錄為例：chenweiqi/Developer/flutter
&nbsp;  
&nbsp;  
![](https://i.imgur.com/2QsYiKg.png)
&nbsp;  
&nbsp;

### 步驟四：打開你的終端機

```go
vim ~/.zshrc

//進入vim按下i新增path
//[PATH_OF_FLUTTER_GIT_DIRECTORY]這段改成你的flutter路徑
export PATH="$PATH:[PATH_OF_FLUTTER_GIT_DIRECTORY]/bin"

//依我為例，改為如下
export PATH="$PATH:$HOME/Developer/flutter/bin"

//修改好後按下esc鍵離開insert模式，然後輸入:wq!存檔離開vim
:wq!

//離開vim後，輸入flutter --version
//看看有沒有剛才安裝的flutter版本，有的話就是安裝成功且路徑有抓到
flutter --version
//有了flutter之後，可以輸入flutter doctor來看看如果要開發flutter專案，尚缺哪些東西沒安裝
flutter doctor
```

&nbsp;  
&nbsp;  
![](https://i.imgur.com/9s5XqbL.png)
&nbsp;  
&nbsp;
![](https://i.imgur.com/l6e5oAe.png)
&nbsp;  
&nbsp;
![](https://i.imgur.com/blzK2iv.png)

### 安裝 Android Studio

請去 android studio 下載 android studio 的檔案，安裝在自己電腦上後打開
選擇右下角 config，點擊 peference 選項，然後選擇 plugin
在 plugin 中搜尋 flutter 並安裝，安裝好後重開 android studio，就會有新增一個 flutter 專案的選項
&nbsp;  
&nbsp;
![](https://i.imgur.com/mVS2vJs.png)

## 好用的 flutter 指令

在此介紹些好用的 flutter 指令

#### flutter doctor

看 flutter 要運行的程式有沒有都安裝了。

#### flutter create “專案名稱”

用 flutter 新建一個專案，會一次建立 71 個檔案。

#### flutter pub get

把 pubspec.yaml 內有使用到的套件下載下來，有點類似 react 的 package.json，flutter pub get 相當於 yarn 或 npm install

#### flutter run -d all

把所所活著的裝置跟模擬器，全都都把 App 執行起來。把剛剛前一個指令建好的專案，改一下裡面的文字，跑一下 flutter run -d all

## 補充

在 MacOS 上開發 Dart && Flutter，需要下載 Java 和 Flutter SDK  
&nbsp;  
[Java SDK](https://www.oracle.com/java/technologies/downloads/#java8)  
&nbsp;  
[Flutter SDK](https://docs.flutter.dev/get-started/install/macos)
