/**
 * Created by jianghong on 05/01/2017.
 */
public class NimGame {
    public boolean canWinNim(int n) {
        if (n < 1) throw new java.lang.IllegalArgumentException();
        return n % 4 != 0;
    }
}
