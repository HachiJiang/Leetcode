import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;

/**
 * Created by jianghong on 2016/12/28.
 */
public class TestReverseString {
    private ReverseString rs;

    @Before
    public void initial() {
        rs = new ReverseString();
    }


    @Test(expected = java.lang.IllegalArgumentException.class)
    public void testInvalid0() {
        rs.reverseString(null);
    }

    @Test
    public void testValid0() {
        Assert.assertEquals("olleh", rs.reverseString("hello"));
    }

    @Test
    public void testValid1() {
        Assert.assertEquals("h", rs.reverseString("h"));
    }

    @Test
    public void testValid2() {
        Assert.assertEquals("", rs.reverseString(""));
    }

    @Test
    public void testValid3() {
        String str = "hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh";
        Assert.assertEquals(str, rs.reverseString(str));
    }
}
