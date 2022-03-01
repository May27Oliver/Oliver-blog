---
slug: Firebase
title: Firebase in React Native
description:
date: 3 Feb 2022
---

今天來實作在 React Native 專案中加入 Firebase Crashlytics。

Firebase Crashlytics 是 google 提供的服務，可以協助手機 app 紀錄 crash 和 error 的 log，十分好用。

## 開啟一個 Firebase 的專案

進入 Firebase 的網頁，申請帳號完畢後，點擊首頁的 GetStart，然後新增專案。
![](https://i.imgur.com/r8TUIyt.png)  
&nbsp;  
&nbsp;
進入下頁填好要創建的專案名稱後下一步下一步，進入主控頁，這裡要選擇要在哪個平台上安裝 firebase，這裡我先選擇了 Android。
![](https://i.imgur.com/GZqGagW.png)
&nbsp;  
&nbsp;  
這裡會需要註冊你的應用程式，Android 的話一定要填的只有紅框這格
![](https://i.imgur.com/TxYev4S.png)
&nbsp;  
&nbsp;  
要填的產品名稱要去你專案目錄 android 資料夾內
android/app/src/main/AndroidManifest.xml
這個檔案內看第二行，package=後面那串字串就是你要填入 firebase 註冊欄位紅框框那欄。
![](https://i.imgur.com/HaYt6LV.png)
&nbsp;  
&nbsp;  
填好後註冊，到第二步驟：
![](https://i.imgur.com/JD6t4v6.png)
第二步驟會需要你下載 google-services.json 檔案，下載下來後放到以下路徑:
&nbsp;  
你的專案目錄/android/app  
&nbsp;
放好之後就可以下一步

![](https://i.imgur.com/AenKjTX.png)

第三步要在你的 android 資料內的 build.gradle 檔案內新增程式碼，gradle 這個檔案記錄了這個 app 用了哪些套件，就好比 react 專案中的 package.json。
&nbsp;  
要新增的是 dependencies 裡的 classpath、然後檢查 repositories 和 allprojects 內有沒有 google()。

```javascript
buildscript {
  repositories {
    // Check that you have the following line (if not, add it):
    google()  // Google's Maven repository

  }
  dependencies {
    ...
    // Add this line
    classpath 'com.google.gms:google-services:4.3.10'

  }
}

allprojects {
  ...
  repositories {
    // Check that you have the following line (if not, add it):
    google()  // Google's Maven repository

    ...
  }
}
```

接著到路徑：  
"你的專案"/android/app/build.gradle  
&nbsp;  
&nbsp;  
這個檔案內添加以下東西：

```javascript
apply plugin: 'com.android.application'
apply plugin: 'com.google.gms.google-services' // Google services Gradle plugin
// Apply the Crashlytics Gradle plugin
apply plugin: 'com.google.firebase.crashlytics'


dependencies {
  // Import the Firebase BoM
  implementation platform('com.google.firebase:firebase-bom:29.1.0')


  // Add the dependency for the Firebase SDK for Google Analytics
  // When using the BoM, don't specify versions in Firebase dependencies
  implementation 'com.google.firebase:firebase-analytics'
 // Declare the dependency for the Firebase SDK for Google Analytics
    implementation 'com.google.firebase:firebase-crashlytics'

  // Add the dependencies for any other desired Firebase products
  // https://firebase.google.com/docs/android/setup#available-libraries
}
```

以上步驟都完成後，開啟終端機到你的專案目錄下，輸入以下指令：  
&nbsp;  
&nbsp;

```go
/*Install & setup the app module*/
yarn add @react-native-firebase/app

/*Install the Crashlytics module*/
yarn add @react-native-firebase/crashlytics

/*If you're developing your app using iOS, run this command*/
cd ios/ && pod install
```
