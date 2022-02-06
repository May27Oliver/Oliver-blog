---
slug: Alogorithm
title: Heap Sort
description:
date: 3 Feb 2022
---

藉由 max heap tree 來進行 sorting 的排序法。
Heap sort

1 build MaxHeap struct

2 func Insert which append the new element to the final slice,then maxHeapifyUp it to the right place

3 func Extract the root element which is the largest num in the max heap tree, swap the root and the final element,then remove the root,maxHeapifyDown the new root to the right place.

4 func HeapifyUp,let the node of index get from parameter compare with its parent node,if larger than parent node,swap it, until it find the right place to go
5 func HeapifyDown, let the node of index get from parameter compare with their child nodes,if smaller than child node, swap it ,until node of index find the right place to go.

6 func swap , switch two element's position in slice.

7 parent, left, right,got index and find their parent, left child, right child  
maxHeapifyDown 是 O(log n)  
maxHeapifyUp 也是 O(log n)

```go
type MaxHeap struct {
	arr []int
}

func (h *MaxHeap) Insert(value int) {
	h.arr = append(h.arr, value)
	h.maxHeapifyUp(len(h.arr) - 1)
}

func (h *MaxHeap) Extract() int {
	if len(h.arr) == 0 {
		fmt.Println("there is no more element can be extracted.")
		return -1
	}
	extracted := h.arr[0]
	l := len(h.arr) - 1
	h.arr[0] = h.arr[l]
	h.arr = h.arr[:l]
	h.maxHeapifyDown(0)
	return extracted
}

func (h *MaxHeap) maxHeapifyUp(i int) {
	for h.arr[i] > h.arr[parent(i)] {
		h.swap(i, parent(i))
		i = parent(i)
	}
}

func (h *MaxHeap) maxHeapifyDown(i int) {
	l, r := left(i), right(i)
	lastIndex := len(h.arr) - 1
	compareIndx := 0
	for l <= lastIndex {
		if l == lastIndex {
			compareIndx = l
		} else if h.arr[l] > h.arr[r] {
			compareIndx = l
		} else {
			compareIndx = r
		}

		if h.arr[i] < h.arr[compareIndx] {
			h.swap(i, compareIndx)
			i = compareIndx
			l, r = left(i), right(i)
		} else {
			return
		}
	}
}

func (h *MaxHeap) swap(i1, i2 int) {
	h.arr[i1], h.arr[i2] = h.arr[i2], h.arr[i1]
}

func parent(i int) int {
	return (i - 1) / 2
}

func left(i int) int {
	return i*2 + 1
}

func right(i int) int {
	return i*2 + 2
}
```
