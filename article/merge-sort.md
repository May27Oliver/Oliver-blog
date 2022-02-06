---
slug: Alogorithm
title: Merge Sort
description:
date: 3 Feb 2022
---

    merge sort是很經典的"divide and merge"案例。
    merge sort利用拆分與合併兩個排列好的陣列兩個優點實現O(n logn n)的時間複雜度
    原理就是把未排序的大陣列切成以一個元素為單位的小陣列，再將之一個一個合併回排列好的大陣列。
    其實你會發現，merge sort就是Preorder Traversal。
    如果今天陣列的長度為n，要拆分log(2,n)次，且每一層要排序n次，所以mergesort的複雜度是n*log(2,n)

keywords:recursion
recursion 會把原初陣列切成 len(arr)個單一值的陣列，再將其一一合併。  
會進入 merge 的左右兩個 array 都已經是 sorted array

```go
func mergeSort(arr []int) []int {
    if len(arr) < 2{
        return arr
    }
    //拆分
    midIdx := len(arr) / 2
    arr_left := mergeSort(arr[:midIdx])
    arr_right := mergeSort(arr[midIdx:])
    //合併
    return merge(arr_left, arr_right)
}

func merge(left_arr, right_arr []int) []int {
	final := []int{}
	i := 0
	j := 0
	for i < len(left_arr) && j < len(right_arr) {
		if left_arr[i] < right_arr[j] {
			final = append(final, left_arr[i])
			i++
		} else {
			final = append(final, right_arr[j])
			j++
		}
	}
	//上面迴圈跑完，左右陣列一定還會遺留一些值，大於final內的任何值，下面用loop將之加入
	for ; i < len(left_arr); i++ {
		final = append(final, left_arr[i])
	}
	for ; j < len(right_arr); j++ {
		final = append(final, right_arr[j])
	}
	return final
}
```
