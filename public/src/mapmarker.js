"use strict";

var MapMarker = function(year, month, day, marker) {

	this.getDate = function() {
		return new Date(year, month - 1, day);
	};

	this.getMarker = function() {
		return marker;
	};

};
