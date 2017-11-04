import org.junit.Test;
import org.junit.Assert;

public class TestQuickSort {

    @Test(expected = java.lang.IllegalArgumentException.class)
    public void testInvalid() {
        QuickSort st = new QuickSort();
    }
}
