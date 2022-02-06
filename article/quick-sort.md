---
slug: Alogorithm
title: Quick Sort
description:
date: 3 Feb 2022
---

Quick Sort
Partition:是 QuickSort 的根本 algorithm。
設定最後一位為 pivot，
put number less than pivot partition in pivot left side,
greater than pivot partition in the right side.
than recursion Partition function while less and greater slice finished.
將 slice 中小於 pivot 的數字放在 pivot 左邊，大於 pivot 的數字放在 pivot 右邊。

Quick Sort 有兩種，一種是有用 Partition 的，一種沒有，沒有的會需要比較多的空間複雜度。

quick sort
worse case performance:O(n^2)
Best case performance:O(n log n)
Average performance:O(n log n)

```go
//Without Partition

func quickSortWithoutPartition(arr []int) []int {
if len(arr) < 2 {
return arr
}
pivot := arr[len(arr)-1]
// fmt.Println("pivot",pivot)
final, left, right := []int{}, []int{}, []int{}

    for i, v := range arr {
    	if i == len(arr)-1 {
    		break
    	} else if v < pivot {
    		left = append(left, v)
    	} else {
    		right = append(right, v)
    	}
    }

    left = quickSortWithoutPartition(left)
    right = quickSortWithoutPartition(right)

    final = append(final, left...)
    final = append(final, pivot)
    final = append(final, right...)

    return final

}

func quicksort_swap(arr []int, i1, i2 int) []int {
arr[i1], arr[i2] = arr[i2], arr[i1]
return arr
}
```

with partition
partition 給定範圍 start 和 end，和兩個 pointer i 和 j
在 start 和 end 的範圍中去比較其內的元素跟 pivot 之間的大小關係，
j 遍歷 array，如果遇到較 pivot 小的值，j 和 i 就 swap，交換位置，然後 i 往前一格。
j 遍歷完陣列後，pivot 再跟最後的 i 值交換位置，如此就會形成 pivot 左邊比 pivot 小
pivot 右邊比 pivot 大的形勢。

```go
func partition(arr []int, start, end int) ([]int, int) {
pivot := arr[end]
i := start
for j := start; j < end; j++ {
if arr[j] < pivot {
arr[i], arr[j] = arr[j], arr[i]
i++
}
}
arr[i], arr[end] = arr[end], arr[i]
return arr, i
}

func quickSortWithPartition(arr []int, start, end int) []int {
if start < end {
var pivot int
arr, pivot = partition(arr, start, end)
arr = quickSortWithPartition(arr, start, pivot-1)
arr = quickSortWithPartition(arr, pivot+1, end)
}
return arr
}
```
