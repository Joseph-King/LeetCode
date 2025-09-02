package main

import "fmt"

func main() {
	var case1 = [3][2]int{{1,1}, {2,2},{3,3}}
	var case2 = [3][2]int{{6,2}, {4,4}, {2,6}}
	var case3 = [3][2]int{{3,1}, {1,3}, {1,1}}

	fmt.Println(numberOfPairs(case1))
	fmt.Println(numberOfPairs(case2))
	fmt.Println(numberOfPairs(case3))
}

func numberOfPairs(points [3][2]int) int {
	var pairs = 0

	for i, pointI := range points {
		for j, pointJ := range points {
			if i == j {
				continue
			}

			if pointI[0] >= pointJ[0] && pointI[1] <= pointJ[1] && isNotWithinPair(points, i, j){
				pairs++
			}
		}
	}

	return pairs
}

func isNotWithinPair(points [3][2]int, i int, j int) bool {
	for x, pointX := range points {
		if x == i || x == j {
			continue
		}

		if pointX[0] <= points[i][0] && pointX[0] >= points[j][0] && pointX[1] >= points[i][1] && pointX[1] <= points[j][1]{
			return false
		}
	}

	return true
}