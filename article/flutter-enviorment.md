---
slug: Flutter
title: Flutter Enviorment
description:
date: 3 Feb 2022
---

    本文介紹如何搭建Dart && Flutter開發環境

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
```

&nbsp;  
&nbsp;  
![](https://i.imgur.com/9s5XqbL.png)
&nbsp;  
&nbsp;
![](https://i.imgur.com/l6e5oAe.png)
&nbsp;  
&nbsp;

### 安裝 Android Studio

請去 android studio 下載 android studio 的檔案，安裝在自己電腦上後打開
選擇右下角 config，點擊 peference 選項，然後選擇 plugin
在 plugin 中搜尋 flutter 並安裝，安裝好後重開 android studio，就會有新增一個 flutter 專案的選項
&nbsp;  
&nbsp;
![](https://i.imgur.com/mVS2vJs.png)

在 MacOS 上開發 Dart && Flutter，需要下載 Java 和 Flutter SDK  
&nbsp;  
[Java SDK](https://www.oracle.com/java/technologies/downloads/#java8)  
&nbsp;  
[Flutter SDK](https://docs.flutter.dev/get-started/install/macos)
