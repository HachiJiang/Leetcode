import org.junit.Assert;
import org.junit.Test;

import java.util.ArrayList;

/**
 * Created by jianghong on 2016/12/27.
 */
public class TestFindDisappearedNumbers {
    @Test(expected = java.lang.IllegalArgumentException.class)
    public void testInvalid() {
        FindDisappearedNumbers fdn = new FindDisappearedNumbers();
        fdn.getNumbers(null);
    }

    @Test
    public void testValid() {
        FindDisappearedNumbers fdn = new FindDisappearedNumbers();
        ArrayList<Integer> expect = new ArrayList<Integer>();
        expect.add(5);
        expect.add(6);
        Assert.assertEquals(expect, fdn.getNumbers(new int[] {4,3,2,7,8,2,3,1}));
    }
}
