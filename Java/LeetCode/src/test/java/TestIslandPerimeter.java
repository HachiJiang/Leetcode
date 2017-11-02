import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;

/**
 * Created by jianghong on 2016/12/29.
 */
public class TestIslandPerimeter {

    private IslandPerimeter ilp;

    @Before
    public void initial() {
        ilp = new IslandPerimeter();
    }

    @Test(expected = java.lang.IllegalArgumentException.class)
    public void testInvalid0() {
        ilp.islandPerimeter(null);
    }

    @Test
    public void testValid0() {
        int[][] grid = new int[][]{
                {0, 1, 0, 0},
                {1, 1, 1, 0},
                {0, 1, 0, 0},
                {1, 1, 0, 0}
        };
        Assert.assertEquals(16, ilp.islandPerimeter(grid));
    }
}
