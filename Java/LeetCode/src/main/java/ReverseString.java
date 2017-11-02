/**
 * Created by jianghong on 2016/12/28.
 */
public class ReverseString {
    public String reverseString(String s) {
        if (s == null) throw new java.lang.IllegalArgumentException();

        char[] ch = s.toCharArray();
        for (int lo = 0, hi = s.length() - 1; hi > lo; hi--, lo++) {
            char tmp = ch[hi];
            ch[hi] = ch[lo];
            ch[lo] = tmp;
        }
        return new String(ch);
    }
}
