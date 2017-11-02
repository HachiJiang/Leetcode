import org.junit.Assert;
import org.junit.Test;

import java.util.ArrayList;

/**
 * Created by jianghong on 2016/12/28.
 */
public class TestFizzBuzz {
    @Test
    public void test0() {
        FizzBuzz fb = new FizzBuzz();
        ArrayList<String> expect = new ArrayList<String>();
        Assert.assertEquals(expect, fb.fizzBuzz(-1));
    }

    @Test
    public void test1() {
        FizzBuzz fb = new FizzBuzz();
        ArrayList<String> expect = new ArrayList<String>();
        Assert.assertEquals(expect, fb.fizzBuzz(0));
    }

    @Test
    public void test2() {
        FizzBuzz fb = new FizzBuzz();
        ArrayList<String> expect = new ArrayList<String>();
        expect.add("1");
        expect.add("2");
        expect.add("Fizz");
        expect.add("4");
        expect.add("Buzz");
        Assert.assertEquals(expect, fb.fizzBuzz(5));
    }

    @Test
    public void test3() {
        FizzBuzz fb = new FizzBuzz();
        ArrayList<String> expect = new ArrayList<String>();
        expect.add("1");
        expect.add("2");
        expect.add("Fizz");
        expect.add("4");
        expect.add("Buzz");
        expect.add("Fizz");
        expect.add("7");
        expect.add("8");
        expect.add("Fizz");
        expect.add("Buzz");
        expect.add("11");
        expect.add("Fizz");
        expect.add("13");
        expect.add("14");
        expect.add("FizzBuzz");
        Assert.assertEquals(expect, fb.fizzBuzz(15));
    }
}
