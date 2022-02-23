---
slug: Algorithm
title: HashTable
description:
date: 3 Feb 2022
---

## HashTable

HashTable 指透過一個 Hash function 產生一組數字
當作 array 的 index，把要儲存的資料放在該 index。  
&nbsp;  
&nbsp;  
如果有資料的 index 重複，則用 Linked List 儲存在同一個 index 下。  
&nbsp;  
&nbsp;  
集合 linked list 優點與 array 優點的資料結構  
&nbsp;  
&nbsp;  
以 golang 來說，要有整個 HashTable 的 type，其下接上 Linked List 的 type，再接下來則有 Linked List 的 node type  
&nbsp;  
&nbsp;  
本文參考 Junmin Lee Data Structures in Golang - Hash Tables 教學，url：
https://www.youtube.com/watch?v=zLnJcAt1aKs&t=656s

```go
package main

import "fmt"

/*

*/

const ArraySize = 7
//如果你的arraysize為7，那麼只要ascii 總和除7餘數相同的都會進同一個index的linked list內

//HashTable Structure(array)
type HashTable struct{
	array [ArraySize]*bucket
}

//Insert
func (h *HashTable) Insert(s string){
	index := hash(s)
	h.array[index].insert(s)
}

//Search
func (h *HashTable) Search(s string)bool{
	index := hash(s)
	return h.array[index].search(s)
}

//Delete
func (h *HashTable) Delete(s string){
	index := hash(s)
	h.array[index].delete(s)
}

/*
hash
比較簡單的hash function直接將key的string每個字所代表的asc code轉成數字加總，除上要擺進的陣列的總長取餘數，即可算出這個key要擺在陣列第幾位，遇到collision則放入該位置的Linked List內。
比較複雜的Multiplication Method，讓key總和乘上0~1之間的無理數，去掉整數位，會拿到一個介於0~1的數字，再乘上m，會得到0~m-1之間的一個整數，這個整數就是index。Multiplacation Method的隨意性比較高，安全性也高。
*/

func hash(val string)int{
	sum := 0
	for _,v := range val{
		sum +=int(v)
	}
	return sum % ArraySize
}



/*
Bucket Structure(Linked list)
insert
search
delete
*/
type bucket struct {
	head *bucketNode
}

type bucketNode struct{
	key string
	next *bucketNode
}

//Bucket insert
func (b *bucket) insert(s string){
	if !b.search(s){
		newNode := &bucketNode{key:s}
		newNode.next = b.head
		b.head = newNode
		return
	}
	fmt.Printf("%s is already in this slot",s)
}

//Bucket search
func (b *bucket) search(s string)bool{
	pointer := b.head
	for pointer != nil{
		if pointer.key == s {
			return true
		}
		pointer = pointer.next
	}
	return false
}

////Bucket delete
func (b *bucket) delete(s string){
	if b.head.key == s {
		b.head = b.head.next
		return
	}
	pointer := b.head
	for pointer.next != nil{
		if pointer.next.key == s {
			pointer.next = pointer.next.next
			return
		}
		pointer = pointer.next
	}
	return
}
func printAll(bucket *bucket){
	pointer := bucket.head
	for pointer != nil{
		fmt.Println(pointer.key)
		pointer = pointer.next
	}
}

func Init() *HashTable{
	result:= &HashTable{}
	for i := range result.array{
		result.array[i] = &bucket{}
	}
	return result
}

func main(){
	hashTable := Init()
	var list = []string{
		"ERIC",
		"KENNY",
		"KYLE",
		"STAN",
		"RANDY",
		"BUTTERS",
		"TOKEN",
	}
	for _,v := range list{
		hashTable.Insert(v)
	}
	index := hash("KENNY")
	printAll(hashTable.array[index])
	hashTable.Delete("ERIC")
	printAll(hashTable.array[index])
}
```
