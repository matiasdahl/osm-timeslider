"use strict";

var DataSource = function() {

	this.colorPalette = [ "#DF3C93", "#EA6E59", "#EBA300", "#CACB00",
			"#69D329", "#00CC81", "#00B5AF", "#0099D0", "#005ED1" ];

	// Storage for all markers. A subset of these might be on the map.
	this.points = new Array();

  //
  // Add marker to map.
  //
  // Note that those markers added last are displayed on top.
  // It would be more natural to have a z-value assigned to each marker
  // depending on its date. However, leaflet does not currently seem
  // to support this (?).
  //
	this.addPoint = function(year, month, day, longitude, latitude, description) {
		var marker = L.circleMarker([latitude, longitude], {
			color : this.colorPalette[year - 2007],
			fillColor : this.colorPalette[year - 2007],
			fillOpacity : 0.5
		}).setRadius(0.75).bindPopup(description);
		this.points.push(new MapMarker(year, month, day, marker));
	}.bind(this);

	this.parseData = function(responseText) {
		var data = responseText.split("\n").splice(1);

		data.forEach(function(entry) {
			if (entry != "") {
				var arr = entry.split("\t");
				var entry_date = arr[0];
				var year = 2000 + parseInt(entry_date.substring(0, 2));

				var desc = (arr[3] != "") ? arr[3] + " ("
						+ parseInt(year) + ")" : "No description - " + year;

				var month = parseInt(entry_date.substring(2, 4));
				var day = parseInt(entry_date.substring(4, 6));
				var latitude = parseFloat(arr[1]);
				var longitude = parseFloat(arr[2]);
				this.addPoint(year, month, day, longitude, latitude, desc);
			}
		}.bind(this))
	};

};
