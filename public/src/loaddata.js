"use strict";

var loadData = function(filename, callback) {
	var request = new XMLHttpRequest();
	request.open('GET', filename, true /* async */);
	request.responseType = "text";
	request.onreadystatechange = function() {
		if (request.readyState == 4) {
			if (request.status == 200) {
				callback(request.response);
			}
		}
	};
	request.send(null);
};
