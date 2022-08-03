const apiKey = "vTHT3NL7ERe74ts8YEU0TGbAPUjvvwnw";

tt.setProductInfo("My-First-API-Key", "6.20.0");
var lietuva = [23.8948016, 55.1735998];
var roundLatLng = Formatters.roundLatLng;
// Create map
var map = tt.map({
  key: apiKey,
  container: "map",
  zoom: 6,
  center: lietuva,
  style: `https://api.tomtom.com/style/1/style/*?map=2/basic_street-satellite&poi=2/poi_dynamic-satellite&key=${apiKey}`,
  dragPan: !isMobileOrTablet(),
});
map.addControl(new tt.FullscreenControl());

new tt.Popup({ className: "tt-popup" })
  .setLngLat(lietuva)
  .setHTML("Click anywhere on the map to lookup the clicked lat lon.")
  .addTo(map);

map.on("click", function (event) {
  var lngLat = new tt.LngLat(
    roundLatLng(event.lngLat.lng),
    roundLatLng(event.lngLat.lat)
  );

  console.log(event.lngLat.lng, event.lngLat.lat);
  new tt.Popup({ className: "tt-popup" })
    .setLngLat(lngLat)
    .setHTML(lngLat.toString())
    .addTo(map);
});
