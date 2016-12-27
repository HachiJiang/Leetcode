/**
 * Created by jianghong on 2016/12/26.
 */

public class HammingDistance {
    public int getDis(int x, int y) {
        if (x < 0 || y < 0) {
            throw new java.lang.IllegalArgumentException("Invalid input.");
        }

        Stopwatch timer = new Stopwatch();
        int count = 0;
        int tmp = x ^ y;
        while(tmp > 0) {
            tmp &= (tmp - 1);
            count++;
        }
        System.out.println(timer.elapsedTime() + "ms");
        return count;
    }
}
