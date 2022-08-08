//DatePicker
$(function(){
  $('.form-floating.date').datepicker({
      calendarWeeks: true,
      todayHighlight: true,
      autoclose: true
  });  
  });

const apiKey = "vTHT3NL7ERe74ts8YEU0TGbAPUjvvwnw";
const zemelapis = document.getElementById("map");


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
let telefonas = document.getElementById('telefonas');
let elPastas = document.getElementById('el-pastas');
let nvrIp = document.getElementById('nvr-ip');
let atvykimas = document.getElementById('data');
let informacija = document.getElementById('papildoma-info');
// let kordinates;
// function createCard(adresas, coordinates, komentaras) {
//   body.appendChild(row);
//   let cardElement = document.createElement('div');
//   cardElement.className = 'card text-bg m-3';
//   cardElement.style = 'max-width: 18rem;';
//   row.appendChild(cardElement);
//   let cardHeader = document.createElement('div');
//   cardHeader.className = 'card-header';
//   cardHeader.innerHTML = adresas;
//   cardElement.appendChild(cardHeader);
//   let cardBody = document.createElement('div');
//   cardBody.className = 'card-body';
//   cardElement.appendChild(cardBody);
//   let cardTitle = document.createElement('p');
//   cardTitle.className = 'card-title';
//   cardTitle.innerHTML = komentaras;
//   cardBody.appendChild(cardTitle);
//   let cardText = document.createElement('p');
//   cardText.className = 'card-text';
//   cardText.innerHTML = coordinates;
//   cardBody.appendChild(cardText);
// }
const body = document.querySelector('body');
const row = document.querySelector('.row');
function createCard(adresas, email, telefonas, nvrip, atvykimas, informacija){
  body.appendChild(row);
  let mainCardElement = document.createElement('div');
  mainCardElement.className = "card col-lg-4 user-card-full"
  row.appendChild(mainCardElement);
  let mainRowElement = document.createElement('div');
  mainRowElement.className = 'row m-l-0 m-r-0';
  mainCardElement.appendChild(mainRowElement);
  let spalvaDiv = document.createElement('div');
  spalvaDiv.className = 'col-sm-2 user-profile bg-zalias';
  mainRowElement.appendChild(spalvaDiv);
  let cardElement = document.createElement('div');
  cardElement.className = 'col-sm-10';
  mainRowElement.appendChild(cardElement);
  let cardBlockElement = document.createElement('div');
  cardBlockElement.className = 'card-block';
  cardElement.appendChild(cardBlockElement);
  let adresasText = document.createElement('h6');
  adresasText.className = 'm-b-20 p-b-5 b-b-default f-w-600 adresas';
  adresasText.innerHTML = adresas;
  cardBlockElement.appendChild(adresasText);
  let rowDivElement = document.createElement('div');
  rowDivElement.className = 'row';
  cardBlockElement.appendChild(rowDivElement);
  let colEmailElement = document.createElement('div');
  colEmailElement.className = "col-sm-12";
  rowDivElement.appendChild(colEmailElement);
  let emailTextElement = document.createElement('p');
  emailTextElement.className = 'm-b-10 f-w-600 emailText';
  emailTextElement.innerHTML = "El.paštas";
  colEmailElement.appendChild(emailTextElement);
  let emailElement = document.createElement('h6');
  emailElement.className = "text-muted f-w-400 email";
  emailElement.innerHTML = email;
  colEmailElement.appendChild(emailElement);
  let colTelefonasElement = document.createElement('div');
  colTelefonasElement.className = "col-sm-6";
  rowDivElement.appendChild(colTelefonasElement);
  let telefonasTextElement = document.createElement('p');
  telefonasTextElement.className = 'm-b-10 f-w-600 telefonasText';
  telefonasTextElement.innerHTML = "Telefonas";
  colEmailElement.appendChild(telefonasTextElement);
  let telefonasElement = document.createElement('h6');
  telefonasElement.className = "text-muted f-w-400 telefonas";
  telefonasElement.innerHTML = telefonas;
  colEmailElement.appendChild(telefonasElement);


  let row2DivElement = document.createElement('div');
  row2DivElement.className = 'row';
  cardBlockElement.appendChild(row2DivElement);
  let colnvrIpElement = document.createElement('div');
  colnvrIpElement.className = "col-sm-6";
  row2DivElement.appendChild(colnvrIpElement);
  let nvrIpTextElement = document.createElement('p');
  nvrIpTextElement.className = 'm-b-10 f-w-600 nvrIpText';
  nvrIpTextElement.innerHTML = "NVR/IP klasė";
  colnvrIpElement.appendChild(nvrIpTextElement);
  let nvrIpElement = document.createElement('h6');
  nvrIpElement.className = "text-muted f-w-400 nvrIp";
  nvrIpElement.innerHTML = nvrip;
  colnvrIpElement.appendChild(nvrIpElement);
  let colAtvyktiElement = document.createElement('div');
  colAtvyktiElement.className = "col-sm-6";
  row2DivElement.appendChild(colAtvyktiElement);
  let atvyktiTextElement = document.createElement('p');
  atvyktiTextElement.className = 'm-b-10 f-w-600 pazadetaAtvyktiText';
  atvyktiTextElement.innerHTML = "Pažadėta atvykti";
  colAtvyktiElement.appendChild(atvyktiTextElement);
  let atvyktiElement = document.createElement('h6');
  atvyktiElement.className = "text-muted f-w-400 pazadetaAtvykti";
  atvyktiElement.innerHTML = atvykimas;
  colAtvyktiElement.appendChild(atvyktiElement);

  let row3DivElement = document.createElement('div');
  row3DivElement.className = 'row';
  cardBlockElement.appendChild(row3DivElement);
  let colInfoElement = document.createElement('div');
  colInfoElement.className = "col-sm-6";
  row3DivElement.appendChild(colInfoElement);
  let infoTextElement = document.createElement('p');
  infoTextElement.className = 'm-b-10 f-w-600 informacijaText';
  infoTextElement.innerHTML = "Informacija";
  colInfoElement.appendChild(infoTextElement);
  let infoElement = document.createElement('h6');
  infoElement.className = "text-muted f-w-400 nvrIp";
  infoElement.innerHTML = informacija;
  colInfoElement.appendChild(infoElement);
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
  createCard(adresas.value, elPastas.value, telefonas.value, nvrIp.value, atvykimas.value, informacija.value);
  forma.style.display = "none"
  adresas.value = "";
  elPastas.value = "";
  telefonas.value = "";
  nvrIp.value = "";
  atvykimas.value = "";
  informacija.value = "";
})