public class Solution {
    public static void main(String[] args){
        int[][] case1 = { {1,1}, {2,2}, {3,3} };
        int[][] case2 = { {6,2}, {4,4}, {2,6} };
        int[][] case3 = { {3,1}, {1,3}, {1,1} };

        System.out.println(numberOfPairs(case1));
        System.out.println(numberOfPairs(case2));
        System.out.println(numberOfPairs(case3));
    }

    public static int numberOfPairs(int[][] points){
        int pairs = 0;

        for(int i=0; i<points.length; i++){
            for(int j=0; j<points.length; j++){
                if(i == j){
                    continue;
                }

                if(points[i][0] <= points[j][0] && points[i][1] >= points[j][1] && isNotWithinPair(points, i, j)){
                    pairs++;
                }
            }
        }

        return pairs;
    }

    public static boolean isNotWithinPair(int[][] points, int i, int j){
        for(int x=0; x<points.length; x++){
            if(x == i || x == j){
                continue;
            }

            if(points[x][0] >= points[i][0] && points[x][0] <= points[j][0] && points[x][1] <= points[i][1] && points[x][1] >= points[j][1]){
                return false;
            }
        }

        return true;
    }
}