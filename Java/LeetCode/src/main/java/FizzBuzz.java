import java.util.ArrayList;
import java.util.List;

/**
 * Created by jianghong on 2016/12/28.
 */
public class FizzBuzz {
    private void replace(List<String> list, int n, int seed, String flag) {
        for (int i = seed - 1; i < n; i += seed) {
            list.set(i, flag);
        }
    }

    public List<String> fizzBuzz(int n) {
        List<String> ret = new ArrayList<String>(n);
        for (int i = 1; i <= n; i++) {
            ret.add(Integer.toString(i));
        }
        replace(ret, n, 3, "Fizz");
        replace(ret, n, 5, "Buzz");
        replace(ret, n, 15, "FizzBuzz");
        return ret;
    }
}
