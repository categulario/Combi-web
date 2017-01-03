function initRutas() {
    var map = new google.maps.Map(document.getElementById("map"), {
        center: {
            lat: 19.5414976,
            lng: -96.9274147
        },
        zoom: 14,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    });
    var infoWindow = new google.maps.InfoWindow({
        map: map
    });
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            var pos = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            };
            map.setCenter(pos);
            var marker = new google.maps.Marker({
                position: pos
            });
            marker.setMap(map);
        }, function() {
            handleLocationError(true, infoWindow, map.getCenter());
        });
    } else {
        handleLocationError(false, infoWindow, map.getCenter());
    }
    $.get("assets/azul.gpx", function(data) {
        var flightPlanCoordinates = [];
        $(data).find("trkpt").each(function(index, item) {
            flightPlanCoordinates.push({
                lat: parseFloat($(item).attr("lat")),
                lng: parseFloat($(item).attr("lon"))
            });
        });
        var flightPath = new google.maps.Polyline({
            path: flightPlanCoordinates,
            geodesic: true,
            strokeColor: "#1E90FF",
            strokeOpacity: 1,
            strokeWeight: 2
        });
        flightPath.setMap(map);
    });
    $.get("assets/cafe.gpx", function(data) {
        var flightPlanCoordinates = [];
        $(data).find("trkpt").each(function(index, item) {
            flightPlanCoordinates.push({
                lat: parseFloat($(item).attr("lat")),
                lng: parseFloat($(item).attr("lon"))
            });
        });
        var flightPath = new google.maps.Polyline({
            path: flightPlanCoordinates,
            geodesic: true,
            strokeColor: "#663300",
            strokeOpacity: 1,
            strokeWeight: 2
        });
        flightPath.setMap(map);
    });
    $.get("assets/walmart.gpx", function(data) {
        var flightPlanCoordinates = [];
        $(data).find("trkpt").each(function(index, item) {
            flightPlanCoordinates.push({
                lat: parseFloat($(item).attr("lat")),
                lng: parseFloat($(item).attr("lon"))
            });
        });
        var flightPath = new google.maps.Polyline({
            path: flightPlanCoordinates,
            geodesic: true,
            strokeColor: "#FF9900",
            strokeOpacity: 1,
            strokeWeight: 2
        });
        flightPath.setMap(map);
    });
}

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
    infoWindow.setPosition(pos);
    infoWindow.setContent(browserHasGeolocation ? "Error: No se pudo mostrar tu ubicación =(" : "Error: Tu navegador no tiene la función de Geolocalización.");
}
