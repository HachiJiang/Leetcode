/**
 * Node
 */

public class Node<Integer> {

    Node<Integer> next;
    Integer val;

    Node(Node<Integer> next, Integer val) {
        this.next = next;
        this.val = val;
    }

    public boolean equals(Node<Integer> nd2) {
        return nd2 != null && nd2.val == this.val;
    }
}
