var map = null;
var markers = [];
var filtered = [
    {"pos_lat": -34.9214989,"pos_lng": 138.6007456},
    {"pos_lat": -34.9214989,"pos_lng": 138.6008456},
    {"pos_lat": -34.9214989,"pos_lng": 138.6009456},
    {"pos_lat": -34.9214989,"pos_lng": 138.6010456},

    {"pos_lat": -34.9224989,"pos_lng": 138.6006456},
    {"pos_lat": -34.9224989,"pos_lng": 138.6007456},
    {"pos_lat": -34.9224989,"pos_lng": 138.6008456},
    {"pos_lat": -34.9224989,"pos_lng": 138.6009456},

    {"pos_lat": -34.9324989,"pos_lng": 138.6009456},
    {"pos_lat": -34.9214989,"pos_lng": 138.6209456},
    {"pos_lat": -34.9124989,"pos_lng": 138.6029456},
    {"pos_lat": -34.9224989,"pos_lng": 138.6069456},
    {"pos_lat": -34.9244989,"pos_lng": 138.6109456},
    {"pos_lat": -34.9224989,"pos_lng": 138.6000456}
];

// Init map
function initMap() {
  var adl = {lat: -34.9284989, lng: 138.6007456};
  map = new google.maps.Map(document.getElementById('map'), {
    zoom: 14,
    styles: [{"featureType": "water","elementType": "geometry","stylers": [{"color": "#e9e9e9"},{"lightness": 17}]},{"featureType": "landscape","elementType": "geometry","stylers": [{"color": "#f5f5f5"},{"lightness": 20}]},{"featureType": "road.highway","elementType": "geometry.fill","stylers": [{"color": "#ffffff"},{"lightness": 17}]},{"featureType": "road.highway","elementType": "geometry.stroke","stylers": [{"color": "#ffffff"},{"lightness": 29},{"weight": 0.2}]},{"featureType": "road.arterial","elementType": "geometry","stylers": [{"color": "#ffffff"},{"lightness": 18}]},{"featureType": "road.local","elementType": "geometry","stylers": [{"color": "#ffffff"},{"lightness": 16}]},{"featureType": "poi","elementType": "geometry","stylers": [{"color": "#f5f5f5"},{"lightness": 21}]},{"featureType": "poi.park","elementType": "geometry","stylers": [{"color": "#dedede"},{"lightness": 21}]},{"elementType": "labels.text.stroke","stylers": [{"visibility": "on"},{"color": "#ffffff"},{"lightness": 16}]},{"elementType": "labels.text.fill","stylers": [{"saturation": 36},{"color": "#333333"},{"lightness": 40}]},{"elementType": "labels.icon","stylers": [{"visibility": "off"}]},{"featureType": "transit","elementType": "geometry","stylers": [{"color": "#f2f2f2"},{"lightness": 19}]},{"featureType": "administrative","elementType": "geometry.fill","stylers": [{"color": "#fefefe"},{"lightness": 20}]},{"featureType": "administrative","elementType": "geometry.stroke","stylers": [{"color": "#fefefe"},{"lightness": 17},{"weight": 1.2}]}],
    center: adl,
    //streetViewControl: true,
    //zoomControl: true,
    disableDefaultUI: true,
  });


  //---------- Place autocomplete testing ----------//
  var input = document.getElementById('mainSearch');
  var autocomplete = new google.maps.places.Autocomplete(input);

  // Bind the map's bounds (viewport) property to the autocomplete object,
  // so that the autocomplete requests use the current map bounds for the
  // bounds option in the request.
  autocomplete.bindTo('bounds', map);

  autocomplete.addListener('place_changed', function() {
    var place = autocomplete.getPlace();
    if (!place.geometry) {
      // User entered the name of a Place that was not suggested and
      // pressed the Enter key, or the Place Details request failed.
      window.alert("No details available for input: '" + place.name + "'");
      return;
    }


    // If the place has a geometry, then present it on a map.
    if (place.geometry.viewport) {
      map.fitBounds(place.geometry.viewport);
      console.log(place.geometry.location.lat());
      console.log(place.geometry.location.lng());
    } else {
      map.setCenter(place.geometry.location);
      map.setZoom(17);  // Why 17? Because it looks good.
    }


    var address = '';
    if (place.address_components) {
      address = [
        (place.address_components[0] && place.address_components[0].short_name || ''),
        (place.address_components[1] && place.address_components[1].short_name || ''),
        (place.address_components[2] && place.address_components[2].short_name || '')
      ].join(' ');
    }
  });
  clearMarkers();
  addMarkers();
}

//Remove markers from map by setting their map to null
function clearMarkers() {
   for (let i = 0; i < markers.length; i++) {
    markers[i].setMap(null);
  }
  markers = [];
}

function addMarkers() {
    for (let i = 0; i < filtered.length; i++) {
        var marker = new google.maps.Marker({
          position: {lat: filtered[i].pos_lat, lng: filtered[i].pos_lng},
          zIndex: i,
          map: map
        });

        // Setting function for each marker
        google.maps.event.addListener(marker, 'click', function() {
            var card = document.getElementById('card');
            if(card.style.display == "block"){
                card.style.display = "none";
            }else{
                card.style.display = "block";
            }
        });

        // Add to markers array
        markers.push(marker);
    }

}
