var map, infoWindow;

function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: {
            lat: -34.397,
            lng: 150.644
        },
        zoom: 10
    });
    infoWindow = new google.maps.InfoWindow;
    // Try HTML5 geolocation.
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            var pos = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            };
            map.setCenter(pos);
            var marker = new google.maps.Marker({ position: pos, map: map });
            // Create an array of alphabetical characters used to label the markers.
            var labels = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

            // The map() method here has nothing to do with the Google Maps API.
            var markers = locations.map(function(location, i) {
                return new google.maps.Marker({
                    position: location,
                    label: labels[i % labels.length]
                });
            });
            var markerCluster = new MarkerClusterer(map, markers, {
                imagePath: 'https://cdn.rawgit.com/googlemaps/js-marker-clusterer/gh-pages/images/m'
            });


        }, function() {
            handleLocationError(true, infoWindow, map.getCenter());
        });
    } else {
        // Browser doesn't support Geolocation
        handleLocationError(false, infoWindow, map.getCenter());
    }
}

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
    infoWindow.setPosition(pos);
    infoWindow.setContent(browserHasGeolocation ?
        'Error: The Geolocation service failed.' :
        'Error: Your browser doesn\'t support geolocation.');
    infoWindow.open(map);
};

<<<<<<< HEAD
$(".guide").on('click', function(event) {
    console.log("guide");
})
$('.traveler').on('click', function(event) {
    console.log('traveler')
})
=======
>>>>>>> a2b7672fc799adc92cd51eddc6e9460ec03c98c2


var locations = [{
    lat: 37.7749,
    lng: -122.4194
}, {
    lat: 37.2749,
    lng: -122.5194
}, {
    lat: 37.9749,
    lng: -122.1194
}, {
    lat: 37.3749,
    lng: -122.4194
}, {
    lat: 38.1749,
    lng: -124.1194
}, {
    lat: 37.9749,
    lng: -122.9194
}, {
    lat: 37.1749,
    lng: -122.1194
}, {
    lat: 37.7790,
    lng: -122.4101
}, ]

