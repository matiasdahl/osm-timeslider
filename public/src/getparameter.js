"use strict";

function getParameter(key) {

  // '?amenity=fire_station?limit=100' ->
  //   args = ['amenity=fire_station', 'limit=100']
  var args = location.search.split('?').splice(1);

  for (var i in args) {
    var isplit = args[i].split('=');
    if (isplit[0] == key) return isplit[1];
  }

  // opened, say, "http://127.0.0.1:8000/index.html"
  alert("Invalid call to index.html. The url should have an amenity=.. parameter.");

}
