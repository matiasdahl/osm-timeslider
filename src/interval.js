"use strict";

/* Is interval empty? */
function isEmpty(interval) {
	return interval[0] > interval[1];
}

/* Empty interval */
function emptyInterval() {
	return [ 0.0, -1.0 ];
}

/* Intersection of two intervals. */
function intervalIntersection(int0, int1) {

	if (isEmpty(int0) || isEmpty(int1)) {
		return emptyInterval();
	}

	var a0 = int0[0];
	var b0 = int0[1];
	var a1 = int1[0];
	var b1 = int1[1];

	/* Two intervals: (a0, b0)  and (a1, b1). We may assume that
	 * a1 >= a0
	 */
	if (a0 > a1) {
		return intervalIntersection(int1, int0)
	}

	if (b1 <= b0) {
		//   Interval 0:      [--------]
		//   Interval 1:       [---]
		return [ a1, b1 ];
	} else {
		if (a1 <= b0) {
			//   Interval 0:      [--------]
			//   Interval 1:           [------------]
			return [ a1, b0 ]

		} else {
			//   Interval 0:      [--------]
			//   Interval 1:                  [------------]
			return emptyInterval()
		}
	}
}
