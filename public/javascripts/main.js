var map = null;
var markers = [];
var filtered = [];

// Init map
function initMap() {
  var adl = {lat: -34.9284989, lng: 138.6007456};
  map = new google.maps.Map(document.getElementById('map'), {
    zoom: 14,
    // Original grey
    // styles: [{"featureType": "water","elementType": "geometry","stylers": [{"color": "#e9e9e9"},{"lightness": 17}]},{"featureType": "landscape","elementType": "geometry","stylers": [{"color": "#f5f5f5"},{"lightness": 20}]},{"featureType": "road.highway","elementType": "geometry.fill","stylers": [{"color": "#ffffff"},{"lightness": 17}]},{"featureType": "road.highway","elementType": "geometry.stroke","stylers": [{"color": "#ffffff"},{"lightness": 29},{"weight": 0.2}]},{"featureType": "road.arterial","elementType": "geometry","stylers": [{"color": "#ffffff"},{"lightness": 18}]},{"featureType": "road.local","elementType": "geometry","stylers": [{"color": "#ffffff"},{"lightness": 16}]},{"featureType": "poi","elementType": "geometry","stylers": [{"color": "#f5f5f5"},{"lightness": 21}]},{"featureType": "poi.park","elementType": "geometry","stylers": [{"color": "#dedede"},{"lightness": 21}]},{"elementType": "labels.text.stroke","stylers": [{"visibility": "on"},{"color": "#ffffff"},{"lightness": 16}]},{"elementType": "labels.text.fill","stylers": [{"saturation": 36},{"color": "#333333"},{"lightness": 40}]},{"elementType": "labels.icon","stylers": [{"visibility": "off"}]},{"featureType": "transit","elementType": "geometry","stylers": [{"color": "#f2f2f2"},{"lightness": 19}]},{"featureType": "administrative","elementType": "geometry.fill","stylers": [{"color": "#fefefe"},{"lightness": 20}]},{"featureType": "administrative","elementType": "geometry.stroke","stylers": [{"color": "#fefefe"},{"lightness": 17},{"weight": 1.2}]}],

    // Lost in the desert
    // styles: [{"elementType": "labels","stylers": [{"visibility": "off"},{"color": "#f49f53"}]},{"featureType": "landscape","stylers": [{"color": "#f9ddc5"},{"lightness": -7}]},{"featureType": "road","stylers": [{"color": "#813033"},{"lightness": 43}]},{"featureType": "poi.business","stylers": [{"color": "#645c20"},{"lightness": 38}]},{"featureType": "water","stylers": [{"color": "#1994bf"},{"saturation": -69},{"gamma": 0.99},{"lightness": 43}]},{"featureType": "road.local","elementType": "geometry.fill","stylers": [{"color": "#f19f53"},{"weight": 1.3},{"visibility": "on"},{"lightness": 16}]},{"featureType": "poi.business"},{"featureType": "poi.park","stylers": [{"color": "#645c20"},{"lightness": 39}]},{"featureType": "poi.school","stylers": [{"color": "#a95521"},{"lightness": 35}]},{},{"featureType": "poi.medical","elementType": "geometry.fill","stylers": [{"color": "#813033"},{"lightness": 38},{"visibility": "off"}]},{},{},{},{},{},{},{},{},{},{},{},{"elementType": "labels"},{"featureType": "poi.sports_complex","stylers": [{"color": "#9e5916"},{"lightness": 32}]},{},{"featureType": "poi.government","stylers": [{"color": "#9e5916"},{"lightness": 46}]},{"featureType": "transit.station","stylers": [{"visibility": "off"}]},{"featureType": "transit.line","stylers": [{"color": "#813033"},{"lightness": 22}]},{"featureType": "transit","stylers": [{"lightness": 38}]},{"featureType": "road.local","elementType": "geometry.stroke","stylers": [{"color": "#f19f53"},{"lightness": -10}]},{},{},{}],

    // The Avacado Effect
    // styles: [{"featureType": "water","elementType": "geometry","stylers": [{"visibility": "on"},{"color": "#aee2e0"}]},{"featureType": "landscape","elementType": "geometry.fill","stylers": [{"color": "#abce83"}]},{"featureType": "poi","elementType": "geometry.fill","stylers": [{"color": "#769E72"}]},{"featureType": "poi","elementType": "labels.text.fill","stylers": [{"color": "#7B8758"}]},{"featureType": "poi","elementType": "labels.text.stroke","stylers": [{"color": "#EBF4A4"}]},{"featureType": "poi.park","elementType": "geometry","stylers": [{"visibility": "simplified"},{"color": "#8dab68"}]},{"featureType": "road","elementType": "geometry.fill","stylers": [{"visibility": "simplified"}]},{"featureType": "road","elementType": "labels.text.fill","stylers": [{"color": "#5B5B3F"}]},{"featureType": "road","elementType": "labels.text.stroke","stylers": [{"color": "#ABCE83"}]},{"featureType": "road","elementType": "labels.icon","stylers": [{"visibility": "off"}]},{"featureType": "road.local","elementType": "geometry","stylers": [{"color": "#A4C67D"}]},{"featureType": "road.arterial","elementType": "geometry","stylers": [{"color": "#9BBF72"}]},{"featureType": "road.highway","elementType": "geometry","stylers": [{"color": "#EBF4A4"}]},{"featureType": "transit","stylers": [{"visibility": "off"}]},{"featureType": "administrative","elementType": "geometry.stroke","stylers": [{"visibility": "on"},{"color": "#87ae79"}]},{"featureType": "administrative","elementType": "geometry.fill","stylers": [{"color": "#7f2200"},{"visibility": "off"}]},{"featureType": "administrative","elementType": "labels.text.stroke","stylers": [{"color": "#ffffff"},{"visibility": "on"},{"weight": 4.1}]},{"featureType": "administrative","elementType": "labels.text.fill","stylers": [{"color": "#495421"}]},{"featureType": "administrative.neighborhood","elementType": "labels","stylers": [{"visibility": "off"}]}],

    styles: [{"featureType": "landscape.man_made","elementType": "geometry","stylers": [{"color": "#f7f1df"}]},{"featureType": "landscape.natural","elementType": "geometry","stylers": [{"color": "#d0e3b4"}]},{"featureType": "landscape.natural.terrain","elementType": "geometry","stylers": [{"visibility": "off"}]},{"featureType": "poi","elementType": "labels","stylers": [{"visibility": "off"}]},{"featureType": "poi.business","elementType": "all","stylers": [{"visibility": "off"}]},{"featureType": "poi.medical","elementType": "geometry","stylers": [{"color": "#fbd3da"}]},{"featureType": "poi.park","elementType": "geometry","stylers": [{"color": "#bde6ab"}]},{"featureType": "road","elementType": "geometry.stroke","stylers": [{"visibility": "off"}]},{"featureType": "road","elementType": "labels","stylers": [{"visibility": "on"}]},{"featureType": "road.highway","elementType": "geometry.fill","stylers": [{"color": "#ffe15f"}]},{"featureType": "road.highway","elementType": "geometry.stroke","stylers": [{"color": "#efd151"}]},{"featureType": "road.arterial","elementType": "geometry.fill","stylers": [{"color": "#ffffff"}]},{"featureType": "road.local","elementType": "geometry.fill","stylers": [{"color": "black"}]},{"featureType": "transit.station.airport","elementType": "geometry.fill","stylers": [{"color": "#cfb2db"}]},{"featureType": "water","elementType": "geometry","stylers": [{"color": "#a2daf2"}]}],

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
  requestMarkers();
}

function requestMarkers() {
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        let spaces = JSON.parse(xhttp.responseText);
        // Filling filtered with positions of spaces
        for(var i=0; i<spaces.length; i++) {
            // Originally want to just send coordinates, but the cards need other info
            // let temp = {"pos_lat": spaces[i].pos_lat, "pos_lng": spaces[i].pos_lng};
            // filtered.push(temp);
            filtered.push(spaces[i]);
        }
        // Initialising map
        // Have to do this the scope of spaces is within this function
        clearMarkers();
        gettingFavs();
      }
    };

    xhttp.open('GET', 'getSpaces.json', true);
    xhttp.setRequestHeader('Content-type', 'application/json');
    xhttp.send();
}

// Getting account id's favourited parking spaces
function gettingFavs() {
    var account_id = window.location.hash.substring(1);

    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        let favs = JSON.parse(xhttp.responseText);
        addMarkers(favs);
      }
    };

    xhttp.open('POST', 'getFavsforAccountID.json', true);
    xhttp.setRequestHeader('Content-type', 'application/json');
    xhttp.send(JSON.stringify({"account_id": account_id}));
}

//Remove markers from map by setting their map to null
function clearMarkers() {
   for (let i = 0; i < markers.length; i++) {
    markers[i].setMap(null);
  }
  markers = [];
}

// favs is an array of the parking_ids that have been favourited
function addMarkers(favs) {
    var icons;
    for (let i = 0; i < filtered.length; i++) {
        var ifFav = false; // If it is favourited
        for(var j=0; j<favs.length; j++) {
            if(filtered[i].parking_id==favs[j].parking_id) { // Favourited
                icons = {
                  url: "https://cdn0.iconfinder.com/data/icons/travel-vacation/289/travel-transport-hotel-vacation-holidays-tourist-tourism-travelling-traveling_86-512.png",
                  scaledSize: new google.maps.Size(30, 30), // scaled size
                  origin: new google.maps.Point(0,0), // origin
                  anchor: new google.maps.Point(0, 0), // anchor
                  labelOrigin: new google.maps.Point(26,13) //label position
                };
                ifFav = true;
                break;
            }

            if(j==favs.length-1 && filtered[i].parking_id!=favs[j].parking_id) { // Not favourited
                icons = {
                  url: "https://cdn0.iconfinder.com/data/icons/small-n-flat/24/678111-map-marker-512.png",
                  scaledSize: new google.maps.Size(30, 30), // scaled size
                  origin: new google.maps.Point(0,0), // origin
                  anchor: new google.maps.Point(0, 0), // anchor
                  labelOrigin: new google.maps.Point(26,13) //label position
                };
                ifFav = false;
            }
        }

        var marker = new google.maps.Marker({
          position: {lat: filtered[i].pos_lat, lng: filtered[i].pos_lng},
          zIndex: i,
          icon: icons,
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
            document.getElementById("mapPrice").innerText = filtered[i].price;
            document.getElementById("mapLocation").innerText = filtered[i].address;
            document.getElementById("mapParkType").innerText = filtered[i].type;
            document.getElementById("hidden_parking_id").innerText = filtered[i].parking_id;

            // Setting favourite hidden div
            for(var k=0; k<favs.length; k++) {
                if(filtered[i].parking_id==favs[k].parking_id) {
                    document.getElementById("hidden_favourite").innerText = 1;
                    document.getElementById("favourite_button").innerText = "favorite";
                    break;
                }

                if(k==favs.length-1 && filtered[i].parking_id!=favs[k].parking_id) {
                    document.getElementById("hidden_favourite").innerText = 0;
                    document.getElementById("favourite_button").innerText = "favorite_border";
                }
            }

            if(filtered[i].account_id==null) {
                document.getElementById("mapAvailability").innerText = "Available";
                document.getElementById("mapPayButton").style.display = "inline-block";
            }else {
                document.getElementById("mapAvailability").innerText = "Occupied";
                document.getElementById("mapPayButton").style.display = "none";
            }
        });

        // Add to markers array
        markers.push(marker);
    }
}

// Will unfavourite/favourite the current selected parking space
function favouriteButton() {
    var parking_id = document.getElementById("hidden_parking_id").innerText;
    var account_id = window.location.hash.substring(1);
    var button = document.getElementById("favourite_button")

    if(button.innerText=="favorite") { // Remove favourite from database
        let xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
          if (this.readyState == 4 && this.status == 200) {
              location.reload();
          }
        };
        xhttp.open('POST', 'removeFavourite.json', true);
        xhttp.setRequestHeader('Content-type', 'application/json');
        xhttp.send(JSON.stringify({"account_id": account_id, "parking_id": parking_id}));
        document.getElementById("favourite_button").innerText = "favorite_border";
    }else{ // Add favourite to database
        let xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
          if (this.readyState == 4 && this.status == 200) {
              location.reload();
          }
        };
        xhttp.open('POST', 'addFavourite.json', true);
        xhttp.setRequestHeader('Content-type', 'application/json');
        xhttp.send(JSON.stringify({"account_id": account_id, "parking_id": parking_id}));
        document.getElementById("favourite_button").innerText = "favorite";
    }
}

// Opening new pages and passing account id through url
function payButton() {
    // Sending parking space information via the url since the mobile app won't be able to see it.
    // Could just send the id and have another ajax request to get the data again from pay.js if we need more information later.
    window.location.href = 'pay.html' + '#' + window.location.hash.substring(1) + '#' + document.getElementById("mapPrice").innerText + '#' + document.getElementById("hidden_parking_id").innerText;
}

function reviewButton() {
    window.location.href = 'reviews.html' + '#' + window.location.hash.substring(1) + '#' + document.getElementById("hidden_parking_id").innerText;
}

function accountSettingsButton() {
    window.location.href = 'accountSettings.html' + '#' + window.location.hash.substring(1);
}

function pastSessionsButton() {
    window.location.href = 'pastSessions.html' + '#' + window.location.hash.substring(1);
}

function favouritesButton() {
    window.location.href = 'favourites.html' + '#' + window.location.hash.substring(1);
}

function paymentOptionsButton() {
    window.location.href = 'paymentOptions.html' + '#' + window.location.hash.substring(1);
}
