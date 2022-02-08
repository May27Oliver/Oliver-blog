---
slug: flutter
title: Flutter Widget
description:
date: 27 January 2022
---

    Flutter內，萬物皆Widget

[Flutter Widget 官方文件](https://api.flutter.dev/flutter/widgets/widgets-library.html)

![](https://i.imgur.com/qBAIAzc.png)
Pic from Flutter : From Zero To Comfortable:  
https://proandroiddev.com/flutter-from-zero-to-comfortable-6b1d6b2d20e

Flutter Widget tree

```javascript=
MaterialApp(
    title()
    Home(
        Scaffold(
            AppBar(
                Title(
                    Text()
                )
                Action(
                    IconButton2()
                    IconButton1()
                )
            )
            Body(
                Center(
                    Row(
                        Column(
                            CheckBox()
                            Text()
                        )
                    )
                )
            )
        )
    )
)
```

## runApp

runApp 接受一個 Widget 參數，這個 Widget 將是本 App 的 Widget Tree 的起點。

## MaterialApp

MaterialApp 是 google 出的質感 ui 套件，flutter 內也有這套件的 library，很多 flutter app 的 Widget 起點都是 MaterialApp。

Ｍ aterialApp 內可以定義 routes

```dart
class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      initialRoute: '/',
      routes: {
        '/': (_) =>FirstWidget(),
        '/second':(_) =>SecondWidget(),
        '/third':(_) =>ThirdWidget(),
      },
    );
  }
}
```

theme 參數可以設定 App 的 Schema 數值：

```dart

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      theme: ThemeData(
          scaffoldBackgroundColor: Colors.lightBlue,
          primaryColor: Colors.lime),
      initialRoute: '/',
      routes: {
        '/': (_) => FirstWidget(),
        '/second': (_) => SecondWidget(),
        '/third': (_) => ThirdWidget(),
      },
    );
  }
}
```

參考資料來源：來吧！Flutter(5)： MaterialApp  
https://medium.com/flutter-taipei/%E4%BE%86%E5%90%A7-flutter-5-materialapp-e27a4887c2fc

&nbsp;  
&nbsp;
書寫 flutter 程式時，請在每個 Widget 的()後面加上","號，如此一來當你右鍵選擇 reformat Code with dartfmt 時，會自動幫你的程式換行。
![](https://i.imgur.com/5W2grmh.png)

### StatelessWidget v.s. StatefulWidget

#### StatelessWidget(無狀態組件)

初始化後都不會改變狀態的 Widget，那就選 StatelessWidget。
所有在 stateless 內的值都是 immutable 的，如果要變更，得新增一個 StatelessWidget。

#### StatelessWidget 文件

快捷鍵：

    stless

```java=
abstract class StatelessWidget extends Widget {
  /// Initializes [key] for subclasses.
 const StatelessWidget({ Key? key }) : super(key: key);

  /// Creates a [StatelessElement] to manage this widget's location in the tree.
  ///
  /// It is uncommon for subclasses to override this method.
  @override
  StatelessElement createElement() => StatelessElement(this);

  /// Describes the part of the user interface represented by this widget.
  ///
  /// The framework calls this method when this widget is inserted into the tree
  /// in a given [BuildContext] and when the dependencies of this widget change
  /// (e.g., an [InheritedWidget] referenced by this widget changes). This
  /// method can potentially be called in every frame and should not have any side
  /// effects beyond building a widget.
  ///
  /// The framework replaces the subtree below this widget with the widget
  /// returned by this method, either by updating the existing subtree or by
  /// removing the subtree and inflating a new subtree, depending on whether the
  /// widget returned by this method can update the root of the existing
  /// subtree, as determined by calling [Widget.canUpdate].
  ///
  /// Typically implementations return a newly created constellation of widgets
  /// that are configured with information from this widget's constructor and
  /// from the given [BuildContext].
  ///
  /// The given [BuildContext] contains information about the location in the
  /// tree at which this widget is being built. For example, the context
  /// provides the set of inherited widgets for this location in the tree. A
  /// given widget might be built with multiple different [BuildContext]
  /// arguments over time if the widget is moved around the tree or if the
  /// widget is inserted into the tree in multiple places at once.
  ///
  /// The implementation of this method must only depend on:
  ///
  /// * the fields of the widget, which themselves must not change over time,
  ///   and
  /// * any ambient state obtained from the `context` using
  ///   [BuildContext.dependOnInheritedWidgetOfExactType].
  ///
  /// If a widget's [build] method is to depend on anything else, use a
  /// [StatefulWidget] instead.
  ///
  /// See also:
  ///
  ///  * [StatelessWidget], which contains the discussion on performance considerations.
  @protected
  Widget build(BuildContext context);
  //build的意思是渲染該元件
}
```

```java
import 'package:flutter/material.dart';

void main(){
    runApp(MyApp());
}

class MyApp extends StatelessWidget{
    @override
    Widget build(BuildContext context){
        return Container();
    }
}

```

#### StatefulWidget(有狀態組件)

StatefulWidget 在創建後可因為 setState 重新描繪創建一次組件。

大部分都是使用 StatelessWidget，當您需要透過 setState 方式更新狀態時才需要採用 StatefulWidget 狀態。

StatefulWidget 運算成本比較昂貴，勿濫用，若需使用盡量安排使用在末子節點上，且讓元件數量降至最少，減少降低系統重繪的成本。

快捷鍵：

    stful

Stateful Widget 和 Stateless Widget 一樣都繼承自 Widget，所以裡面的 extends Widget 裡面的值是不可變的，是故要加入一個 State，Stateful Widget 內新增了一個 extends State<T>的類別。

![](https://i.imgur.com/dlTPMGo.png)

```java
import 'package:flutter/material.dart';

void main() => runApp(MaterialApp(
    // home: Scaffold(
    //   appBar: AppBar(
    //     title: Text("I Am Rich"),
    //   ),
    // ),
    home: myStatefulWig()));

class myStatefulWig extends StatefulWidget {
  const myStatefulWig({Key? key}) : super(key: key);

  @override
  _myStatefulWigState createState() => _myStatefulWigState();
}

class _myStatefulWigState extends State<myStatefulWig> {
  int number = 0;
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("I Am Rich"),
      ),
      floatingActionButton: FloatingActionButton(
          child: Icon(Icons.add),
          onPressed: () {
            setState(() {
              setState(() {
                //setState會trigger build function重新執行。
                number += 1;
              });
            });
          }),
      body: Center(
        child: Text(
          '$number',
          style: TextStyle(fontSize: 100),
        ),
      ),
    );
  }
}

```

#### 參考資料：KT 的 flutter 線上課程

## Hot Reload 迅速載入無需重新打包，且不會掉失 state

![](https://i.imgur.com/M0zk4MG.png)
android studio 下面有個閃電的記號可以實現 hot reload，但切記 hot reload 只有在 stateful 和 stateless Widget 內的資料被改動時才會觸發。

旁邊綠色圈圈的 icon 是 hot restart，hot restart 會重啟 app，所有狀態歸零

```dart
  import 'package:flutter/material.dart'

  void main(){
    runApp(
      MyApp()
    )
  }
  //  hot reload只有在stateless和stateful的Widget內才會生效
  class MyApp extends StatelessWidget{
    @override
    Widget build(BuildContext context){
      return MaterialApp{
        home:Scaffold(
          backgroundColor:Colors.red,
          body:Container(),
        ),
      };
    }
  }
```
