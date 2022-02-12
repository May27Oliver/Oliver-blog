---
slug: Go
title: Go Enviroment
description:
date: 3 Feb 2022
---

## 1.安裝 Golang

https://golang.org/

請下載 1.13 版以上，會有 Proxy 和 go module 功能

安裝完畢可以終端機輸入:

```go=
go env

go env -w GO111MODULE = on
//把gomodule打開，如此便能在gopath外使用go

//下載goimports，終端機輸入
go get golang.org/x/tools/cmd/goimports

```

看 go 的安裝狀況

### 在 Mac 上安裝

可以用 Homebrew：

    brew install go

### 配置 Go 語言

在 bash_profile 內的 Gopath 是個環境變數，用來表明 go 存放的路徑，Gopath 最好只有一個，所有的 Go 程式碼都放在 Gopath/src 內，在 Go 1.11 版後有了 go modules 的功能，所有的程式碼不需要都放在 gopath 下面，可以藉由以下指令開新資料夾放：

    go mod init "路徑/專案名稱"

### 第一個 Go 程式：

```go=
package main//所有的go程式都要有個package

import "fmt"
// fmt 是一個核心函式庫，
// 包含格式化和列印輸出或從各種 I/O 來源讀取輸入等相關的功能。它匯出如
// Println()、Printf()、Scanf()等函數，以供其他 package 重複使用。


func main(){//程式進入點
    fmt.Println("Hello, world!")
}
```

### go run

執行 go 腳本

### go build

將 go 程式變成 exe 檔

### go install

效果同 go build，將打包好的結果放到 pkg 資料夾內

### go fmt

存檔結束後，在終端機輸入：

    go fmt "檔案名稱"

即可將 go 檔案內不符合格式的部分格式化。
也可以用 goimports，先下載 goimports:

    go install golang.org/x/tools/cmd/goimports@latest

    //下載好後終端機輸入：
    goimports -l -w

### golint ./... 嚴謹地採取讓 golang 符合標準的檢測工具，跟 eslint 同義

### 交叉編譯

#### 在 Mac 上開發 go，在 linux,windows 上執行，就會需要用到交叉編譯。

1.開啟終端機設定環境變數：

```go=
CGO_ENABLED=0 GOOS=linux GOARCH=amd64 go build main.go
CGO_ENABLED=0 GOOS=windows GOARCH=amd64 go build main.go
```

#### Linux 下開發，Mac 和 Windows 執行

```go=
CGO_ENABLED=0 GOOS=darwin GOARCH=amd64 go build main.go
CGO_ENABLED=0 GOOS=windows GOARCH=amd64 go build main.go
```

#### Windows 開發,Mac 和 linux 執行

```go=
SET CGO_ENABLED=0
SET GOOS=darwin
SET GOARCH=amd64
go build main.go

SET CGO_ENABLED=0
SET GOOS=linux
SET GOARCH=amd64
go build main.go

// GOOS：目標平台的操作系統（darwin、freebsd、linux、windows）
// GOARCH：目標平台的體系架構（386、amd64、arm）
// 交叉編譯不支持 CGO 所以要禁用它
```
