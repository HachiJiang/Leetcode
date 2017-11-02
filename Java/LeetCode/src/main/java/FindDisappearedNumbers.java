/**
 * Created by jianghong on 2016/12/26.
 */
import java.util.ArrayList;
import java.util.List;

public class FindDisappearedNumbers {
    public List<Integer> getNumbers(int[] nums) {
        if (nums == null) {
            throw new java.lang.IllegalArgumentException("Invalid input.");
        }

        Stopwatch timer = new Stopwatch();

        int i, len = nums.length;
        for (i = 0; i < len; i++) {
            int j = Math.abs(nums[i]) - 1; // expected position of val is (val - 1)
            if (nums[j] > 0) nums[j] = -nums[j];
        }

        List<Integer> numbers = new ArrayList<Integer>();
        for (i = 0; i < len; i++) {
            if (nums[i] > 0) numbers.add(i + 1);
        }

        System.out.println(timer.elapsedTime() + "ms");
        return numbers;
    }
}
