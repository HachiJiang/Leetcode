import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;

/**
 * Created by jianghong on 05/01/2017.
 */
public class TestNimGame {
    private NimGame ng;

    @Before
    public void initial() {
        ng = new NimGame();
    }

    @Test(expected = java.lang.IllegalArgumentException.class)
    public void testInvalid() {
        ng.canWinNim(-1);
    }

    @Test
    public void testValid() {
        Assert.assertFalse(ng.canWinNim(4));
        Assert.assertFalse(ng.canWinNim(8));
        Assert.assertFalse(ng.canWinNim(12));
        Assert.assertFalse(ng.canWinNim(16));

        Assert.assertTrue(ng.canWinNim(1));
        Assert.assertTrue(ng.canWinNim(2));
        Assert.assertTrue(ng.canWinNim(3));
        Assert.assertTrue(ng.canWinNim(5));
        Assert.assertTrue(ng.canWinNim(6));
        Assert.assertTrue(ng.canWinNim(7));
    }
}
