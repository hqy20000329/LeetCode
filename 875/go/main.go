package main  //包声明 模块化
//go 是一个天生支持多核计算云开发时代C语言
//node + go 服务器有关
//require('fs') filesystem
import (
	"fmt"  //向命令行输出hello world   format
)//es6
 //node 脚本语言 实时编译
 //go c 二进制文件
 //编译器

func minEatingSpeed(piles []int, H int) int {
	low := 1 // let low = 1;
	// 最大pile的数量 11  交给一个函数
	// 函数是组织代码的最小单元 { 块级作用域 }  
	high := maxPiles(piles)
	for{
		if low > high {
			break
		}
		if canEatAllBananas(piles, H, low){
			return low
		} else{
			low++
		}
	}
	// fmt.Printf("%d",high)
	// 是否可以吃完 1.. max low  
	return low
}

func canEatAllBananas(piles []int, H int, k int) bool {
	//1. range piles piles[i]/k向上取整数 math.Ceil
	//2. 加起来
	//3. 是否小于等于H
	return true
}
func maxPiles(piles []int) int {
	h := 0
	//range
	for _, n := range piles{
		h = max(h, n)
	}
	// for i := 0; i < len(piles); i++ {
	// 	if h<=piles[i] {h=piles[i]}
	// }
	return h
}

func max(a int,b int) int {
	if a>b {return a}
	return b
}



func main() { // func 函数关键字
	// 从main开始
	// go 是一个静态， 类型约束
	fmt.Printf("%d小时内吃完香蕉的最慢速度是%d只/小时",
	 8, minEatingSpeed([]int{3, 6, 7, 11}, 8))
}
