//
// Google Map Begin

function initialize() {
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
      stylers: [{ visibility: "on" }, { color: "#4DBBE9" }, { lightness: 17 }],
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

  var mapOptions = {
    zoom: 15,
    center: new google.maps.LatLng(23.9911111, 85.36305555555555),
    disableDefaultUI: true,
    styles: styleArray,
  };

  var map = new google.maps.Map(
    document.getElementById("map-canvas"),
    mapOptions
  );

  var marker = new google.maps.Marker({
    position: mapOptions.center,
    map: map,
    title: "",
    label: "",
  });
}
google.maps.event.addDomListener(window, "load", initialize);
