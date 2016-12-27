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

        List<Integer> numbers = new ArrayList<Integer>();
        int i, len = nums.length;

        for (i = 0; i < len; i++) {
            int j = Math.abs(nums[i]) - 1; // expected position of val is (val - 1)
            if (nums[j] > 0) {
                nums[j] = -nums[j];
            }
        }

        for (i = 0; i < len; i++) {
            if (nums[i] > 0) {
                numbers.add(i + 1);
            }
        }

        System.out.println(timer.elapsedTime() + "ms");
        return numbers;
    }

    public static void main(String[] args) {
        FindDisappearedNumbers fdn = new FindDisappearedNumbers();
        List<Integer> result = fdn.getNumbers(new int[] {4,3,2,7,8,2,3,1});
        for (int num: result) {
            System.out.println(num);
        }
    }
}
