// codigo maps
function initMap() {
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
		//Ruta azul
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

			var rutaAzul = new google.maps.Polyline({
				path: flightPlanCoordinates,
				geodesic: true,
				strokeColor: '#1E90FF',
				strokeOpacity: 1.0,
				strokeWeight: 2
			});
			addRutaAzul();
			//rutaAzul.setMap(map);
		});

		function addRutaAzul(){
			rutaAzul.setMap(map);
		}

		//Ruta cafe
		$.get('assets/cafe.gpx', function (data) {
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

			var rutaCafe = new google.maps.Polyline({
				path: flightPlanCoordinates,
				geodesic: true,
				strokeColor: '#663300',
				strokeOpacity: 1.0,
				strokeWeight: 2
			});
			addRutaCafe();
			//rutaCafe.setMap(map);
		});
		function addRutaCafe(){
			rutaCafe.setMap(map);
		}
}
function handleLocationError(browserHasGeolocation, infoWindow, pos) {
  infoWindow.setPosition(pos);
  infoWindow.setContent(browserHasGeolocation ?
                        'Error: Servicio de Geolocalización fallido.' :
                        'Error: Tu navegador no tiene la función de Geolocalización.');
}
