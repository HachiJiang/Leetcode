/** Problem 4
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
/* There are two sorted arrays nums1 and nums2 of size m and n respectively. 
Find the median of the two sorted arrays. 
The overall run time complexity should be O(log (m+n)).*/
/*var findMedianSortedArrays = function(nums1, nums2) {
  if (!nums1 || !nums2) return null;

  var nums3 = [];
  var i = 0,
    j = 0;
  while ((nums1[i] !== undefined) && (nums2[j] !== undefined)) {
    while (nums1[i] <= nums2[j]) {
      nums3.push(nums1[i++]);
    }
    while (nums2[j] <= nums1[i]) {
      nums3.push(nums2[j++]);
    }
  }

  while (nums1[i] !== undefined) {
    nums3.push(nums1[i++]);
  }
  while (nums2[j] !== undefined) {
    nums3.push(nums2[j++]);
  }
  return (nums3.length % 2 === 0) ?
    (nums3[(nums3.length >> 1)] + nums3[(nums3.length >> 1 - 1)]) /2 :
    nums3[nums3.length >> 1];
};*/
function findMedian(A, idxA, m, B, idxB, n, k) {
  if (m > n) return findMedian(B, idxB, n, A, idxA, m, k);
  if (m === 0) return B[idxB + k - 1];
  if (k == 1) return Math.min(A[idxA], B[idxB]);

  var pa = Math.min(k >> 1, m),
    pb = k - pa;
  if (A[idxA + pa - 1] < B[idxB + pb - 1]) {
    return findMedian(A, idxA + pa, m - pa, B, idxB, n, pb);
  } else if (A[idxA + pa - 1] > B[idxB + pb - 1]) {
    return findMedian(A, idxA, m, B, idxB + pb, n - pb, pa);
  } else {
    return A[idxA + pa - 1];
  }
}
var findMedianSortedArrays = function(nums1, nums2) {
  if (!nums1 || !nums2) return null;

  var m = nums1.length,
    n = nums2.length;
  var k = m + n;
  if (k % 2 !== 0) {
    return findMedian(nums1, 0, m, nums2, 0, n, (k + 1) >> 1);
  } else {
    return (findMedian(nums1, 0, m, nums2, 0, n, k >> 1) + findMedian(nums1, 0, m, nums2, 0, n, (k >> 1) + 1)) / 2;
  }
};