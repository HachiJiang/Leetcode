import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;

/**
 * Created by jianghong on 05/01/2017.
 */
public class TestSingleNumber2 {
    private SingleNumber2 solution;

    @Before
    public void initial() {
        solution = new SingleNumber2();
    }

    @Test(expected = java.lang.IllegalArgumentException.class)
    public void testInvalid() {
        solution.singleNumber(null);
    }

    @Test
    public void testValid() {
        int[] nums = new int[]{1, -1, 1, 1, 0, 0, 0};
        Assert.assertEquals(-1, solution.singleNumber(nums));

        nums = new int[]{1, -8,  1, -8, 1, -8, 0};
        Assert.assertEquals(0, solution.singleNumber(nums));

        nums = new int[]{1, -8, 1,  1, -8, 0, -8, 0, 9, 0};
        Assert.assertEquals(9, solution.singleNumber(nums));
    }
}
