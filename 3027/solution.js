var numberOfPairs = function(points){
    let pairs = 0

    for(let i in points){
        for(let j in points){
            if(i == j){
                continue
            }

            if(points[j][0] >= points[i][0] && points[j][1] <= points[i][1] && isNotWithin(points, i, j)){
                pairs++
            }
        }
    }

    return pairs
}

var isNotWithin = function(points, i, j){
    for(let x in points){
        if(x == i || x == j){
            continue
        }
        
        if(points[x][0] >= points[i][0] && points[x][0] <= points[j][0] && points[x][1] <= points[i][1] && points[x][1] >= points[j][1]){
            return false
        }
    }

    return true
}

var case1 = [ [1,1], [2,2], [3,3] ]
var case2 = [ [6,2], [4,4], [2,6] ]
var case3 = [ [3,1], [1,3], [1,1] ]

console.log(numberOfPairs(case1))
console.log(numberOfPairs(case2))
console.log(numberOfPairs(case3))