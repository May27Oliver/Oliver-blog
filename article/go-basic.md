---
slug: Go
title: Go基礎語法
description:
date: 3 Feb 2022
---

## 定義變數

```go=
var 變數名稱 型別

var theInt int = 1
var theString string = "Oliver"
```

## 型別

```go=
package main

import (
	"fmt"
	"math"
	"math/cmplx"
)

//bool,string
//(u)int,(u)int8,(u)int16,(u)int32,(u)int64,uintptr
//byte 8位元,rune 32位元
//float32, float64, complex64, complex128

/*
按照Go語言規範，任何型別在未初始化時都對應一個零值：
布林型別是false，整型是0，字串是""，
而指標、函式、interface、slice、channel和map的零值都是nil。
*/

func euler() {
    fmt.Println(
        cmplx.Pow(math.E, 1i*math.Pi) + 1)
}

//類型轉換
func triangle() {
    var a, b int = 3, 4
    var c int
    //Sqrt return的是float64 不能附值給int，必須先經過強制轉換
    c = int(math.Sqrt(float64(a*a + b*b)))
    fmt.Println(c)
}

//常量
func consts() {
    const (
        filename = "abc.txt"
        a, b     = 3, 4
    )
    //在go語言中，首字母大寫代表的是public的意思
    //const 可以作為各種類型被使用，舉例而言，這裡的a,b就不需要像上面經過float64()轉換
    var c int
    c = int(math.Sqrt(a*a + b*b))
    fmt.Println(filename, c)
}

//枚舉 enums
func enums() {
    const (
        cpp = iota
        _
        java
        python
        golang
        javascript
    )
    //b,kb,mb,gb,tb,pb
    const (
        b = 1 << (10 * iota)
        kb
        mb
        gb
        tb
        pb
    )
    // fmt.Println(cpp, java, python, golang, javascript)
    fmt.Println(b, kb, mb, gb, tb, pb)
}

func main() {
    //euler()
    //triangle()
    //consts()
    enums()
}

```

## 運算子

```java=
//算術運算： + , - , * , /
var x int
x = 3*3 + 10
fmt.Println(x)

//指定運算： = , += , -= , *= , /=
var y int

y += 1

//單元運算： ++ , --
y++
y--

//比較運算：> , < , >= , <= , ==
//略

//邏輯運算： ! , && , ||
//略
```

## go Slice Array

在 golang 中 Array 宣告必須固定長度，Slice 則不必。

```java=
//Array宣告
var arr [5]string //[]中要加數字
arr2 := [5]int{1, 2, 3, 4, 5}
arr3 := [...]int{2, 4, 6, 8, 10}//...讓編譯器數有幾個數字

//雙層陣列
arr2D :=[2][2]int{{1,2},{3,4}}

func changeArrValue(arr [5]int) {
	arr[0] = 100
}
/*
 * 1. [2,4,6,8,10]，go語言內如果把arr丟進func裡，
 * 在func內會拷貝一份新的array，
 * 故在func裡面改變array任一單一值都不會影響外面的array
 * 2.[10]int與[20]int是不同類型
 * */

func main() {
    arr3 := [...]int{2, 4, 6, 8, 10} //...讓編譯器數有幾個數字
    changeArrValue(arr3)
    fmt.Println(arr3)

}
/*-----------------------------------------------*/
//slice
var identifier []type//[]空的代表slice
langs = []string{"Go","Python","Ruby","PHP"}//[]表示切片類型

//切片不需要說明長度，可使用make()函式進行切片
var slice1 []type = make([]type, len, cap)
//或者
s := make([]type , len, cap)

x := make([]int, 3, 10)
x[0] = 1
x[1] = 2
x[2] = 3

//取長度
len(x) //3

//往字串後面新增元素
x = append(x , 4)
x = append(x , 5 , 6)

//複製slice內容
c := make([]string, len(s))

//要複製陣列，先創一個新個空陣列，和原陣列一樣長
copy(y,x)
fmt.Println("新切片的內容",c)

//擷取陣列片段，這個跟python一樣
l := s[ 2 : 5 ]

func main(){
    var s []int //定義slice，Zero value for slice is nil

    for i := 0; i < 100; i++ {
        printSlice(s)
        //此處len會隨著回圈數遞增，但cap則會在與len相同數量後以倍數成長
        s = append(s, 2*i+1)
        }

    arr := [...]int{0, 1, 2, 3, 4, 5, 6, 7}
    //slice extends
    s3 := arr[2:6]
    s4 := s1[3:5]
    //請注意s1這裡本無6這個元素，但因為slice內capacity會映射原陣列，故仍舊印出，但s1[i]不可超過len(s1)
    fmt.Printf("s3 = %v ,len(s3) = %d, cap(s3) = %d\n", s3, len(s3), cap(s1))
    //s3 = [100 3 4 5] ,len(s3) = 4, cap(s3) = 5
    fmt.Printf("s4 = %v ,len(s4) = %d ,cap(s3) = %d\n", s4, len(s4), cap(s4))
    //s4 = [5 6] ,len(s4) = 2 ,cap(s3) = 2

    s5 := append(s4, 10)
    s6 := append(s5, 11)
    s7 := append(s6, 12)
    fmt.Printf("s5 = %v ,len(s5) = %d, cap(s5) = %d\n", s5, len(s5), cap(s5))
    fmt.Printf("s6 = %v ,len(s6) = %d, cap(s6) = %d\n", s6, len(s6), cap(s6))
    fmt.Printf("s7 = %v ,len(s7) = %d, cap(s7) = %d\n", s7, len(s7), cap(s7))

    /*
    slice宣告，slice是基於array的映射

    一個slice有三個值ptr,length,capacity
    ptr:該slice起始的元素
    length:該slice映射到幾個array元素
    capacity:該slice的ptr到映射的array最末位元素間有多少元素

    */
    /*
    s5,s6,s7 view different array from origin array
    append時如果元素超越cap，系統會重新分配一個新的array給slice
    append必須有個新的變數接收
    s := append(s,val)
    */
    //刪除slice中的值
    fmt.Println("Deleting elements from slice")
    s8 := []int{2, 4, 6, 8, 10, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0}
    s8 = append(s8[:3], s8[4:]...)
    fmt.Println(s8)//[2 4 6 10 12 0 0 0 0 0 0 0 0 0 0 0 0]

    //slice刪除第一個元素
    fmt.Println("Poping from front")
    s8 = s8[1:]
    //slice刪除最末位元素
    fmt.Println("Poping from the end")
    s8 = s8[:len(s8)-1]
}

```

![](https://i.imgur.com/RpPbvwu.png)

## map

```go=
//宣告
m:=map[string]string{
    "name":"ccmouse",
    "course":"golang",
    "site":"imooc",
    "quality":"notbad"
}
```

## 流程控制

```go=
package main

import (
	"fmt"
	"io/ioutil"
)

func eval(a, b int, op string) int {
	//go switch不用加break，如果想自動執行下個條件要加fallthrough
	//go switch後面也可以不加表達式，每個case後面加上條件即可
	var result int
	switch op {
	case "+":
		result = a + b
	case "-":
		result = a - b
	case "*":
		result = a * b
	case "/":
		result = a / b
	default:
		panic("unsupported operator:" + op)
	}
	return result
}

func goRange()[]int{
    //for range是golang迴圈的方式之一，會回傳index和value
    arr := []int{1,2,3,4,5,6}
    for i, v := range arr {
		fmt.Printf(i,v)
	}
    //因為go語言檢查定義而不用的變數名稱很嚴謹，如果range回傳的index或value任一個不想使用可以用_迴避。
    for _, v := range arr {
		fmt.Printf(i,v)
	}
}

func main() {
	const filename = "./controlFlow/abc.txt"
	// contents, err := ioutil.ReadFile(filename)
	// if err != nil { //nil是空值
	// 	fmt.Println(err)
	// } else {
	// 	fmt.Printf("%s\n", contents)
	// }

	//golang if 可以如下寫，但如下寫，就不能在if外調用contents,err
	if contents, err := ioutil.ReadFile(filename); err != nil {
		fmt.Println(err)
	} else {
		fmt.Printf("%s\n", contents)
	}


    //以下是流程控制if
    if boolean {
        //若為true，執行此區塊
    }else{

    }

    var x int

    fmt.Println("請輸入100以內的任一數字:")

    fmt.Scanln(&x)
    if x == 100 {
        fmt.Println("做得好")
    }else{
        fmt.Println("輸入錯誤")
    }
}

```

## Go func

### 所有的 go 參數都是 call by Value

```go =

//回傳多筆資料
multiReturn := func() (x int, y string, z int) {
    return 1, "Oliver", 2
}
box1, box2, box3 := multiReturn()
fmt.Println(box1, box2, box3)

//傳入多筆參數
func sum(number ...int)int{
    s:=0
    for i:=0; i < number.length; i++{
        s += number[i]
    }
    return s
}

```

## Golang Pointer

Pointer 是儲存資料的記憶體位置的變數。

指標的零值是 nil，nil 也是 slice、map 與函式的零值。

&是位址運算子，將&放在值型態前會回傳儲存值的記憶體位置。

\*是間接運算子，將他放在指標型態的變數前會回傳指標所指的值，稱為“解參考”。

指標型態是指在形態前加上\*，就讓該型態成為該型態的指標型態。

建立變數>取得記憶體位置>存放到指標變數>反解指標變數

![](https://i.imgur.com/kj3ovpR.png)

```java=
//建立變數
var x int = 3

//取得記憶體位置:&變數名稱
fmt.Println(&x)

//存放到指標變數，指標資料型態為：*資料型態
var xPtr *int = &x
fmt.Println(xPtr)
//0xc0000a4050
//反解指標變數
fmt.Println(*xPtr) //在指標變數前加上*可以反解該指標變數

```

## Golang 指標參數

指標在做為參數傳遞時會發揮特別效果：

```java=
//一般而言，傳遞普通參數都是call by value
//傳遞指標是call by pointer，
//pointer在函式內反解可以直接改動函式外的value
func main(){
    var x int = 10
    var xPtr *int = &x
    add(xPtr)
    fmt.Println(x)//20
}

func add(xPtr *int){
    *xPtr = *xPtr + 10
    fmt.Println(*xPtr)//20
}
```
