def numberOfPairs(points) -> int:
    pairs = 0

    for i in range(len(points)):
        for j in range(len(points)):
            if i == j:
                continue
            
            if points[i][0] <= points[j][0] and points[i][1] >= points[j][1] and isNotWithinPair(points, i, j):
                pairs+=1

    return pairs

def isNotWithinPair(points, i, j):
    for x in range(len(points)):
        if x == i or x == j:
            continue
        
        if points[x][0] >= points[i][0] and points[x][0] <= points[j][0] and points[x][1] <= points[i][1] and points[x][1] >= points[j][1]:
            return False

    return True

case1 = [ [1,1], [2,2], [3,3] ]
case2 = [ [6,2], [4,4], [2,6] ]
case3 = [ [3,1], [1,3], [1,1] ]

print(numberOfPairs(case1))
print(numberOfPairs(case2))
print(numberOfPairs(case3))