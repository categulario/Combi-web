//Ruta azul de combi

function initAzul() {

	var map = new google.maps.Map(document.getElementById('map'),{
		center: {lat: 19.536665, lng: -96.930525},
		zoom: 14,
		mapTypeId: google.maps.MapTypeId.ROADMAP
	});

	var infoWindow = new google.maps.InfoWindow({map: map});
	// HTML5 geolocation.
	  if (navigator.geolocation) {
	    navigator.geolocation.getCurrentPosition(function(position) {
	      var pos = {
	        lat: position.coords.latitude,
	        lng: position.coords.longitude
	      };
	      //infoWindow.setPosition(pos);
	      //infoWindow.setContent('Estás aquí');
	      map.setCenter(pos);
				var marker = new google.maps.Marker({position:pos});
				marker.setMap(map);
	    }, function() {
	      handleLocationError(true, infoWindow, map.getCenter());
	    });
	  } else {
	    // Browser doesn't support Geolocation
	    handleLocationError(false, infoWindow, map.getCenter());
	  }

	$.get('assets/azul.gpx', function (data) {
		// declarar un arreglo vacio
		var flightPlanCoordinates = [
		];

		$(data).find('trkpt').each(function (index, item) {
			// rellenar arreglo con .push()
			flightPlanCoordinates.push({
				lat: parseFloat($(item).attr('lat')),
				lng: parseFloat($(item).attr('lon')),
			});
		});

		var flightPath = new google.maps.Polyline({
			path: flightPlanCoordinates,
			geodesic: true,
			strokeColor: '#1E90FF',
			strokeOpacity: 1.0,
			strokeWeight: 2
		});

		flightPath.setMap(map);
	});

}

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
  infoWindow.setPosition(pos);
  infoWindow.setContent(browserHasGeolocation ?
												'Error: No se pudo mostrar tu ubicación =(' :
												//'Error: Servicio de Geolocalización fallido.' :
                        'Error: Tu navegador no tiene la función de Geolocalización.');
}
