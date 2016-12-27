/**
 * Created by jianghong on 2016/12/26.
 */

import org.junit.Test;
import org.junit.Assert;

public class TestHammingDistance {

    @Test(expected = java.lang.IllegalArgumentException.class)
    public void testInvalid0() {
        HammingDistance h = new HammingDistance();
        Assert.assertEquals(0, h.getDis(-1, 0));
    }

    @Test(expected = java.lang.IllegalArgumentException.class)
    public void testBoardInvalid1() {
        HammingDistance h = new HammingDistance();
        Assert.assertEquals(0, h.getDis(0, -1));
    }

    @Test
    public void testValid0() {
        HammingDistance h = new HammingDistance();
        Assert.assertEquals(h.getDis(0, 4), 1);
    }

    @Test
    public void testValid1() {
        HammingDistance h = new HammingDistance();
        Assert.assertEquals(3, h.getDis((int)(Math.pow(2, 10) + Math.pow(2, 8)), (int)(Math.pow(2, 3))));
    }
}
