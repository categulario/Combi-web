// Muestra las todas las rutas (cafe, amarilla y azul) juntas

function initRutas() {
	var map = new google.maps.Map(document.getElementById('map'),{
		center: {lat: 19.5414976, lng: -96.9274147},
		zoom: 14,
		mapTypeId: google.maps.MapTypeId.ROADMAP
		//var boton=document.getElementById('mostrar');
		//boton.addEventListener('click', mostrar, false)
	});

	var infoWindow = new google.maps.InfoWindow({map: map});
	// HTML5 geolocation.
	  if (navigator.geolocation) {
	    navigator.geolocation.getCurrentPosition(function(position) {
	      var pos = {
	        lat: position.coords.latitude,
	        lng: position.coords.longitude
	      };
	    //  infoWindow.setPosition(pos);
	    //  infoWindow.setContent('Estás aquí');
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
			// rellenar .push(gufbftyfty)
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

	$.get('assets/cafe.gpx', function (data) {
		// declarar un arreglo vacio
		var flightPlanCoordinates = [
			//{lat: 19.550318, lng:-96.94188}
		];

		$(data).find('trkpt').each(function (index, item) {
			// rellenar .push(gufbftyfty)
			flightPlanCoordinates.push({
				lat: parseFloat($(item).attr('lat')),
				lng: parseFloat($(item).attr('lon')),
			});
		});

		var flightPath = new google.maps.Polyline({
			path: flightPlanCoordinates,
			geodesic: true,
			strokeColor: '#663300',
			strokeOpacity: 1.0,
			strokeWeight: 2
		});

		flightPath.setMap(map);
	});

	$.get('assets/walmart.gpx', function (data) {
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
			strokeColor: '#FF9900',
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
