const apiKey = "vTHT3NL7ERe74ts8YEU0TGbAPUjvvwnw";
const zemelapis = document.getElementById("map");
const body = document.querySelector('body');
const row = document.querySelector('.row');

tt.setProductInfo("My-First-API-Key", "6.20.0");
var lietuva = [23.8948016, 55.1735998];
var roundLatLng = Formatters.roundLatLng;
let lngLat; // koordinates
// Create map
var map = tt.map({
  key: apiKey,
  container: "map",
  zoom: 6,
  center: lietuva,
  style: `https://api.tomtom.com/style/1/style/*?map=2/basic_street-satellite&poi=2/poi_dynamic-satellite&key=${apiKey}`,
  dragPan: !isMobileOrTablet(),
});


//Create table
let forma = document.querySelector('.forma-card');
let adresas = document.getElementById('adresas');
let komentaras = document.getElementById('komentaras');
let kordinates;
function createCard(adresas, coordinates, komentaras) {
  body.appendChild(row);
  let cardElement = document.createElement('div');
  cardElement.className = 'card text-bg m-3';
  cardElement.style = 'max-width: 18rem;';
  row.appendChild(cardElement);
  let cardHeader = document.createElement('div');
  cardHeader.className = 'card-header';
  cardHeader.innerHTML = adresas;
  cardElement.appendChild(cardHeader);
  let cardBody = document.createElement('div');
  cardBody.className = 'card-body';
  cardElement.appendChild(cardBody);
  let cardTitle = document.createElement('p');
  cardTitle.className = 'card-title';
  cardTitle.innerHTML = komentaras;
  cardBody.appendChild(cardTitle);
  let cardText = document.createElement('p');
  cardText.className = 'card-text';
  cardText.innerHTML = coordinates;
  cardBody.appendChild(cardText);
}

map.on("dblclick", (e) => {
  let coordinates = new tt.LngLat(
    roundLatLng(e.lngLat.lng),
    roundLatLng(e.lngLat.lat)
  );
  console.log(coordinates);
  let coord = document.querySelector(".card-text");
  console.log(coord);
  kordinates = coordinates;
  coord.innerHTML = coordinates.toString();

  function createMarker(icon, position, color, popupText) {
    let markerElement = document.createElement("div");
    markerElement.className = "marker";

    let markerContentElement = document.createElement("div");
    markerContentElement.className = "marker-content";
    markerContentElement.style.backgroundColor = color;
    markerElement.appendChild(markerContentElement);

    let iconElement = document.createElement("div");
    iconElement.className = "marker-icon";
    iconElement.style.backgroundImage =
      "url(https://api.tomtom.com/maps-sdk-for-web/cdn/static/" + icon + ")";
    markerContentElement.appendChild(iconElement);

    let popup = new tt.Popup({ offset: 30 }).setText(popupText);
    // add marker to map
    new tt.Marker({ element: markerElement, anchor: "bottom" })
      .setLngLat(position)
      .setPopup(popup)
      .addTo(map);
  }
  forma.style.display = 'block';
  createMarker('accident.colors-white.png', coordinates, '#c30b82', coordinates);
  // createCard(coordinates);
  // let marker = new tt.Marker().setLngLat(coordinates).addTo(map);
});

let submitButton = document.querySelector('.mygtukas-submit');
submitButton.addEventListener('click', () => {
  createCard(adresas.value, kordinates, komentaras.value);
  forma.style.display = "none"
  adresas.value = "";
  komentaras.value = "";
})