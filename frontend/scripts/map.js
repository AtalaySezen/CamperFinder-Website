
//Show Cards Data: 
let apiCards = 'http://localhost:3000/places';

async function cardsApi(url) {
  const response = await fetch(url);
  data = await response.json();
  showCards(data);
}

function showCards(data) {
  for (let x of data) {
  console.log(x.coordinate);

    array.push(x.coordinate);


  
  }
}
let array = [];

cardsApi(apiCards);



var map = L.map('map').setView([41.54654854352209, 28.22250964965878], 10);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);


var marker = L.marker([41.54654854352209, 28.22250964965878]).addTo(map);
var marker = L.marker([41.144192786654195, 28.456781908349555]).addTo(map);
//Bu döngü ile direkt bağlayacağız.


// for (var i = 0; i < locations.length; i++) {
//     marker = new L.marker([locations[i][1], locations[i][2]])
//       .bindPopup(locations[i][0])
//       .addTo(map);

var circle = L.circle([41.54654854352209, 28.22250964965878], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 500
}).addTo(map);


var polygon = L.polygon([
    [51.509, -0.08],
    [51.503, -0.06],
    [51.51, -0.047]
]).addTo(map);