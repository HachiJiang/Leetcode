/** Problem 56
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */
/**
 * @param {Interval[]} intervals
 * @return {Interval[]}
 */
var swap = function(intervals, low, high) {
  var tmp = intervals[low];
  intervals[low] = intervals[high];
  intervals[high] = tmp;
}

var partition = function(intervals, low, high) {
  var privotKey = intervals[low].start;
  while (low < high) {
    while (low < high && intervals[high].start >= privotKey)
      --high;
    swap(intervals, low, high);
    while (low < high && intervals[low].start <= privotKey)
      ++low;
    swap(intervals, low, high);
  }
  return low;
}


var quickSort = function(intervals, low, high) {
  if (low < high) {
    var privotLoc = partition(intervals, low, high);
    quickSort(intervals, low, privotLoc - 1);
    quickSort(intervals, privotLoc + 1, high);
  }
}

var merge = function(intervals) {
  if (intervals === undefined || intervals.length < 2)
    return intervals;

  // sorting
  quickSort(intervals, 0, intervals.length - 1);

  var result = [];
  var i = 0,
    j = 0;
  var start_val, end_val;
  do {
    j++;
    start_val = intervals[i].start;
    end_val = intervals[i].end;
    while (intervals[j] && (intervals[j].start <= end_val)) {
      if (intervals[j].end > end_val) {
        end_val = intervals[j].end;
      }
      j++;
    }
    result.push(new Interval(start_val, end_val));
    i = j;
  } while (j < intervals.length);

  return result;
};