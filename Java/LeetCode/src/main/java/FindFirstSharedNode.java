/**
 * Find the first shared node of two linked list
 */

import java.util.LinkedList;

public class FindFirstSharedNode {

    public Node<Integer> getFirstSharedNode(LinkedList<Node> list1, LinkedList<Node> list2) {
        int size1 = list1.size();
        int size2 = list2.size();

        Node<Integer> longNd;
        Node<Integer> shortNd;

        if (size1 < size2) {
            longNd = list2.getFirst();
            shortNd = list1.getFirst();
        } else {
            longNd = list1.getFirst();
            shortNd = list2.getFirst();
        }

        for (int i = 0, diff = size1 - size2; i < diff; i++) {
            longNd = longNd.next;
        }

        while (longNd != null && !longNd.equals(shortNd)) {
            longNd = longNd.next;
            shortNd = shortNd.next;
        }

        return longNd;
    }
}
