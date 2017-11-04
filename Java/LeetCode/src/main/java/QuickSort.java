/**
 * Quick Sort
 */

public class QuickSort {

    public void quickSort(int[] arr) {
        if (arr == null) return; // or throw exception
        quickSort(arr, 0, arr.length - 1);
    }

    private void swap(int[] arr, int i, int j) {
        int tmp = arr[i];
        arr[i] = arr[j];
        arr[j] = tmp;
    }

    private int partition(int[] arr, int start, int end) {
        int low = start;
        int high = end;
        int ref = arr[low];

        while (low < high) {
            while (arr[low] < ref) low++;
            while (arr[high] > ref) high--;
            if (arr[low] >= arr[high]) {
                swap(arr, low, high);
                low++;
                high--;
            }
        }
        return low; // improve by return low and high?
    }

    private void quickSort(int[] arr, int start, int end) {
        if (start >= end) return;

        int mid = partition(arr, start, end);

        // start -> mid - 1, values are equal or smaller than arr[mid]
        quickSort(arr, start, mid - 1);
        // mid + 1 -> end, values are equal or bigger than arr[mid]
        quickSort(arr, mid + 1, end);
    }
}
