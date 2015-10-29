"use strict";

var map = L.map('map', {
	scrollWheelZoom : false,
	attributionControl : false,
	center : [ 50.8, -0.12 ],
	zoom : 4
});

L.tileLayer('http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png')
 .addTo(map);

var copyright_notice = 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    + ' contributors | '
    + 'Tiles &copy; <a href="https://cartodb.com/basemaps">CartoDB</a>';
L.control.attribution({position : 'topright'})
 .addAttribution(copyright_notice)
 .setPrefix('')
 .addTo(map);

L.control.scale({
	position : 'topright'
}).addTo(map);

/*
 *  Prevent UI events (slider, buttons, etc.) from propagating down to the map.
 *  See:
 *
 *     https://github.com/Leaflet/Leaflet/issues/1163
 *
 */
var separateFromMap = function(idName) {
	var div = L.DomUtil.get(idName);
  L.DomEvent.disableClickPropagation(div);
	L.DomEvent.disableScrollPropagation(div);
};

separateFromMap('info-button');
separateFromMap('info-view');
separateFromMap('slider-box');

/***  Minor UI tweaks  ***/
$.modal.defaults.zIndex = 90000;
$.modal.defaults.showClose = false;

//  flatter design for zoom controls
$(".leaflet-control-zoom.leaflet-bar.leaflet-control")
		.css("box-shadow", "none");

// fill in amenity name in info text
$(".tagname_text").text(getParameter('amenity'));

/*
 *  The first and last date in the data. Below, these are hardcoded so we can display the
 *  slider before all the data is loaded. To simplify the code for displaying ticks in the
 *  slider, the start date is assumed to be 1st of Jan. Note also that the OSM data contain
 *  amenities edited before 2007.
 */
var sliderFullRange = [ new Date(2007, 0, 1), new Date(2015, 11, 1) ];
var selectedInterval = [ new Date(2014, 1, 1), new Date(2015, 2, 1) ];

var slider = new DateSlider(sliderFullRange, selectedInterval);

// ---- Map is loading on page. Start loading data

LoadingSpinner.start();

var receiveData = function(fileContent) {
	var dataSource = new DataSource();
	dataSource.parseData(fileContent);

	var markerCloud = new MarkerCollection(dataSource, map);
	slider.setCallback(markerCloud.sliderCallback);
	markerCloud.sliderCallback(selectedInterval);

	LoadingSpinner.stop();
	slider.activate(dataSource.colorPalette);
};

loadData('./data/' + getParameter('amenity') + '.tsv', receiveData);
