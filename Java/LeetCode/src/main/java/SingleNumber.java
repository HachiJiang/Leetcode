/**
 * Created by jianghong on 05/01/2017.
 */
public class SingleNumber {
    public int singleNumber(int[] nums) {
        if (nums == null || nums.length < 1)
            throw new java.lang.IllegalArgumentException();

        int rt = 0;
        for (int num: nums) {
            rt ^= num;
        }
        return rt;
    }
}
