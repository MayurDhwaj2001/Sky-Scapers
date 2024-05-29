// Google Map Begin function initialize() {
var locations = [
  ["Los Angeles", 23.985847, 85.364479],
  ["Long Beach", 23.396318, 85.347541],
];
var styleArray = [
  {
    stylers: [{ visibility: "off" }],
  },
  {
    featureType: "water",
    elementType: "geometry",
    stylers: [{ visibility: "on" }, { color: "#000000" }, { lightness: 17 }],
  },
  {
    featureType: "landscape",
    elementType: "geometry",
    stylers: [{ visibility: "on" }, { color: "#000000" }, { lightness: 20 }],
  },
  {
    featureType: "landscape",
    elementType: "labels",
    stylers: [{ visibility: "on" }, { color: "#000000" }, { lightness: 16 }],
  },
  {
    featureType: "road.highway",
    elementType: "geometry.fill",
    stylers: [{ visibility: "on" }, { color: "#d7b46a" }, { lightness: 17 }],
  },
  {
    featureType: "road.highway",
    elementType: "labels.text.fill",
    stylers: [
      { visibility: "on" },
      { saturation: 36 },
      { color: "#000000" },
      { lightness: 16 },
    ],
  },
  {
    featureType: "road.highway",
    elementType: "labels.icon",
    stylers: [{ visibility: "on" }],
  },
  {
    featureType: "road.arterial",
    elementType: "geometry",
    stylers: [{ visibility: "on" }, { color: "#000000" }, { lightness: 16 }],
  },
  {
    featureType: "road.arterial",
    elementType: "labels.text",
    stylers: [{ visibility: "on" }, { color: "#000000" }, { lightness: 16 }],
  },
  {
    featureType: "road.arterial",
    elementType: "labels.text.fill",
    stylers: [{ saturation: 36 }, { color: "#ffffff" }, { lightness: 40 }],
  },
  {
    featureType: "road.local",
    elementType: "geometry.fill",
    stylers: [{ visibility: "on" }, { color: "#000000" }, { lightness: 17 }],
  },
  {
    featureType: "administrative.locality",
    elementType: "labels.text",
    stylers: [{ visibility: "on" }, { color: "#000000" }, { lightness: 16 }],
  },
  {
    featureType: "administrative.locality",
    elementType: "labels.text.fill",
    stylers: [{ visibility: "on" }, { color: "#ffffff" }, { lightness: 40 }],
  },
];

var bounds = new google.maps.LatLngBounds();

for (var i = 0; i < locations.length; i++) {
  bounds.extend(new google.maps.LatLng(locations[i][1], locations[i][2]));
}

var mapOptions = {
  disableDefaultUI: true,
  styles: styleArray,
};

var map = new google.maps.Map(
  document.getElementById("map-canvas"),
  mapOptions
);
map.fitBounds(bounds);

var markers = [];
for (var j = 0; j < locations.length; j++) {
  var marker = new google.maps.Marker({
    position: new google.maps.LatLng(locations[j][1], locations[j][2]),
    map: map,
    title: locations[j][0],
  });
  markers.push(marker);
}

google.maps.event.addDomListener(window, "load", initialize);
