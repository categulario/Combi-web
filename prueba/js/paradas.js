
//OPCION 1

var data = {"stops": [
		{"longitude": 19.552109,  "latitude": -96.909160},
		{"longitude": 19.5492385, "latitude":-96.9098608},
		{"longitude": 19.5492385, "latitude": -96.9098608},
		{"longitude": 19.5492385, "latitude": -96.9098608},
		{"longitude": 19.5436777, "latitude": -96.9167273},
		{"longitude": 19.5436777, "latitude": -96.9167273},
		{"longitude": 19.5383594, "latitude": -96.9248812},
		{"longitude": 19.5383594, "latitude": -96.9248812},
		{"longitude": 19.5383594, "latitude": -96.9248812},
		{"longitude": 19.5349014, "latitude": -96.9250528},
		{"longitude": 19.5317062, "latitude": -96.9252889},
		{"longitude": 19.5317062, "latitude": -96.9252889},
		{"longitude": 19.5286727, "latitude": -96.9251387},
]}
var data = {

}

var markers = [];
for (var i = 0; i < 100; i++) {
    var dataStops = data.stops[i];
    var latLng = new google.maps.LatLng(dataStops.latitude,
        dataStops.longitude);
    var marker = new google.maps.Marker({
      position: latLng
});
var marker = new google.maps.Marker({
    position: latLng,
    map: map,
  });
markers.push(marker);
}
var markerCluster = new MarkerClusterer(map, markers);
}
google.maps.event.addDomListener(window, 'load', initialize);
}

//OPCION 2
var data = {
	p1: {center: {lat: 19.552109,  lng: -96.909160}},
	p2: {center: {lat: 19.5492385, lng: -96.9098608}},
	p3: {center: {lat: 19.5492385, lng: -96.9098608}},
	p4: {center: {lat: 19.5492385, lng: -96.9098608}},
	p5: {center: {lat: 19.5436777, lng: -96.9167273}},
	p6: {center: {lat: 19.5436777, lng: -96.9167273}},
	p7: {center: {lat: 19.5383594, lng: -96.9248812}},
	p8: {center: {lat: 19.5383594, lng: -96.9248812}},
	p9: {center: {lat: 19.5383594, lng: -96.9248812}},
	p10: {center:	{lat: 19.5349014, lng: -96.9250528}},
	p11: {center:	{lat: 19.5317062, lng: -96.9252889}},
	p12: {center:	{lat: 19.5317062, lng: -96.9252889}},
	p13: {center:	{lat: 19.5286727, lng: -96.9251387}},
]}

for (var stops in data) {
  // Add the circle for this city to the map.
  var stopCircle = new google.maps.Circle({
    strokeColor: '#FF0000',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#663300',
    fillOpacity: 0.35,
    map: map,
    center: data[stops].center,
    radius: 100
  });
}

//OPCIÓN 3

var data = [
		["longitude", 19.552109,   -96.909160],
		["longitude", 19.5492385, -96.9098608],
		["longitude", 19.5492385,  -96.9098608],
		["longitude", 19.5492385,  -96.9098608],
		["longitude", 19.5436777,  -96.9167273],
		["longitude", 19.5436777,  -96.9167273],
		["longitude", 19.5383594,  -96.9248812],
		["longitude", 19.5383594,  -96.9248812],
		["longitude", 19.5383594,  -96.9248812],
		["longitude", 19.5349014,  -96.9250528],
		["longitude", 19.5317062,  -96.9252889],
		["longitude", 19.5317062,  -96.9252889],
		["longitude", 19.5286727,  -96.9251387],
];
function setMarkers(map, marcadores) {

for (var i = 0; i < marcadores.length; i++) {
var myLatLng = new google.maps.LatLng(marcadores[i][1], marcadores[i][2]);
var marker = new google.maps.Marker({
position: myLatLng,
map: map,
});

(i, marker);
}
}
