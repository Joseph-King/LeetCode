fn main() {
    let case1: Vec<Vec<i32>> = vec![
        vec![1,1],
        vec![2,2],
        vec![3,3]
    ];
    let case2: Vec<Vec<i32>> = vec![
        vec![6,2],
        vec![4,4],
        vec![2,6]
    ];
    let case3: Vec<Vec<i32>> = vec![
        vec![3,1],
        vec![1,3],
        vec![1,1]
    ];
    
    println!("Result: {}", number_of_pairs(&case1));
    println!("Result: {}", number_of_pairs(&case2));
    println!("Result: {}", number_of_pairs(&case3));
}

fn number_of_pairs(points: &Vec<Vec<i32>>) -> i32 {
    let mut pairs = 0;

    for i in 0..points.len() {
        for j in 0..points.len() {
            if i == j {
                continue;
            }

            if points[i][0] <= points[j][0] && points[i][1] >= points[j][1] && is_not_within_pair(&points, i, j){
                pairs+=1;
            }
        }
    }

    return pairs;
}

fn is_not_within_pair(points: &Vec<Vec<i32>>, i: usize, j: usize) -> bool {
    for x in 0..points.len() {
        if x == i || x == j {
            continue;
        }

        if points[x][0] >= points[i][0] && points[x][0] <= points[j][0] && points[x][1] <= points[i][1] && points[x][1] >= points[j][1]{
            return false;
        }
    }

    return true;
}
