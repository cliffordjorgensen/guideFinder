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
$('.btn').on('click', function(event){
    event.preventDefault()
    console.log('i am clicked')
=======
$(".guide").on('click', function(event) {
    console.log("guide");
})
$('.traveler').on('click', function(event) {
    console.log('traveler')
})

>>>>>>> d999c31ef66e7948e68f61d90002eb803f209fcc

$.ajax({url: '/login', method: 'get'}).then(function(res){
        console.log("this is the response from map ", res);
    })
});
// function initMap() {

//     var map = new google.maps.Map(document.getElementById('map'), {
//         zoom: 3,
//         center: { lat: -28.024, lng: 140.887 }
//     });

//     // Create an array of alphabetical characters used to label the markers.
//     var labels = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

//     // Add some markers to the map.
//     // Note: The code uses the JavaScript Array.prototype.map() method to
//     // create an array of markers based on a given "locations" array.
//     // The map() method here has nothing to do with the Google Maps API.
//     var markers = locations.map(function(location, i) {
//         return new google.maps.Marker({
//             position: location,
//             label: labels[i % labels.length]
//         });
//     });

//     // Add a marker clusterer to manage the markers.
//     var markerCluster = new MarkerClusterer(map, markers, { imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m' });
// }
// var locations = [
//     { lat: -31.563910, lng: 147.154312 },
//     { lat: -33.718234, lng: 150.363181 },
//     { lat: -33.727111, lng: 150.371124 },
//     { lat: -33.848588, lng: 151.209834 },
//     { lat: -33.851702, lng: 151.216968 },
//     { lat: -34.671264, lng: 150.863657 },
//     { lat: -35.304724, lng: 148.662905 },
//     { lat: -36.817685, lng: 175.699196 },
//     { lat: -36.828611, lng: 175.790222 },
//     { lat: -37.750000, lng: 145.116667 },
//     { lat: -37.759859, lng: 145.128708 },
//     { lat: -37.765015, lng: 145.133858 },
//     { lat: -37.770104, lng: 145.143299 },
//     { lat: -37.773700, lng: 145.145187 },
//     { lat: -37.774785, lng: 145.137978 },
//     { lat: -37.819616, lng: 144.968119 },
//     { lat: -38.330766, lng: 144.695692 },
//     { lat: -39.927193, lng: 175.053218 },
//     { lat: -41.330162, lng: 174.865694 },
//     { lat: -42.734358, lng: 147.439506 },
//     { lat: -42.734358, lng: 147.501315 },
//     { lat: -42.735258, lng: 147.438000 },
//     { lat: -43.999792, lng: 170.463352 }
// 