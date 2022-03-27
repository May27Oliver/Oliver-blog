---
slug: Algorithm
title: Graph
description:
date: 27 March 2022
---

## Graph

Graph 是更完整的 Tree，Graph 有很多種，有類似像 HashTable 那樣的 adjacent list，也有雙重 edge 的 adjacent matrix。

1. graph 是個抽象的資料類別
2. graph 是個有限的集合(a finite set of vertices) 3.在 graph 的點和點之間相連的線，稱之為 edges，
   如果線是有方向性的，則稱為 arrow，graph 則稱為 directive graph。
3. graph 就是有形成 cycle 的 tree
4. adjacency list 可以用來實現 graph，類似一個 hashTable 的結構，首先有個陣列，陣列裡每個值都是一個陣列，用來表達圖上相鄰的節點 vertex
5. adjacency matrix 用雙重陣列來記載 graph，每個節點在 matrix 上都得成對一個節點，紀錄彼此的相臨關係。
   參考資料：
   https://www.youtube.com/watch?v=JDP1OVgoa0Q

```go
package main

import "fmt"

//Graph represents an adjacency list graph
type Graph struct {
	vertices []*Vertex
}

//Vertex represents a graph vertex
type Vertex struct {
	key      int
	adjacent []*Vertex
}

//AddVertex adds Vertex to the Graph
func (g *Graph) AddVertex(n int) {
	if contains(g.vertices, n) {
		err := fmt.Errorf("Vertex %v not added because it is an existing key", n)
		fmt.Println(err.Error())
	} else {
		g.vertices = append(g.vertices, &Vertex{key: n})
	}
}

//contain
func contains(s []*Vertex, n int) bool {
	for i := 0; i < len(s); i++ {
		if s[i].key == n {
			return true
		}
	}
	return false
}

//print all the adjacent list for each vertex of graph
func (g *Graph) PrintAllVertexAdjacent() {
	for _, v := range g.vertices {
		fmt.Printf("\nVertex %v :", v.key)
		for _, v := range v.adjacent {
			fmt.Printf(" %v", v.key)
		}
	}
}

//AddEdge adds an edge to the graph
func (g *Graph) AddEdge(from,to int){
	//get vertex
	fromVertex := g.getVertex(from)
	toVertex := g.getVertex(to)
	//check error
	if fromVertex == nil || toVertex == nil{//無法建立edge
		err := fmt.Errorf("Invalid edge (%v --> %v)",from,to)
		fmt.Println(err.Error())
	}else if contains(fromVertex.adjacent,to){//已存在edge
		err := fmt.Errorf("Existing edge (%v --> %v)",from,to)
		fmt.Println(err.Error())
	}	else{
		//add edge
		fromVertex.adjacent = append(fromVertex.adjacent,toVertex)
	}
}

//getVertex returns a pointer to the vertex with a key integer
func (g *Graph) getVertex(k int) *Vertex{
	for i,v := range g.vertices{
		if v.key == k{
			return g.vertices[i]
		}
	}
	return nil
}

func main() {
	graphTest := Graph{}
	for i := 0; i < 5; i++ {
		graphTest.AddVertex(i)
	}
	graphTest.AddEdge(1,2)
	graphTest.AddEdge(1,2)
	graphTest.AddEdge(6,2)
	graphTest.AddEdge(3,2)

	graphTest.PrintAllVertexAdjacent()
}

```
